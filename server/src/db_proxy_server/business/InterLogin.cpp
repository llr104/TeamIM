/*================================================================
*     Copyright (c) 2015年 lanhu. All rights reserved.
*   
*   文件名称：InterLogin.cpp
*   创 建 者：Zhang Yuanhao
*   邮    箱：bluefoxah@gmail.com
*   创建日期：2015年03月09日
*   描    述：
*
================================================================*/
#include "InterLogin.h"
#include "../DBPool.h"
#include "EncDec.h"
#include "UserModel.h"

bool CInterLoginStrategy::doLogin(const std::string &strName, const std::string &strPass, IM::BaseDefine::UserInfo& user)
{
    bool bRet = false;

    if(this->_findUser(strName,user) == false)
    {
        return bRet;
    }

    string strInPass = strPass + user.salt();
    char szMd5[33];
    CMd5::MD5_Calculate(strInPass.c_str(), strInPass.length(), szMd5);
    string strOutPass(szMd5);
    if(strOutPass == user.password())
    {
        bRet = true;
    }else
    {
        bRet = false;
    }

    return bRet;
}

int32_t CInterLoginStrategy::doRegister(const std::string& strName, 
    const std::string& strPass, const std::string& strNick,const int32_t sex,
    const std::string& strAvatar,IM::BaseDefine::UserInfo& user)
{
    int32_t Ret = 0;
    CDBManager* pDBManger = CDBManager::getInstance();
    CDBConn* pDBConn = pDBManger->GetDBConn("teamtalk_slave");

    if (pDBConn)
    {
        //查询是否有账号
        string strSql = "select * from IMUser where name=" + strName;
        CResultSet* pResultSet = pDBConn->ExecuteQuery(strSql.c_str());
        while (pResultSet->Next()){
            log("user already has: %s",strName.c_str());
            return 1;
        }

        //没有账号则创建
        DBUserInfo_t dbUser;
        dbUser.strName = strName;
        dbUser.strNick = strNick;
        dbUser.password = strPass;
        dbUser.strAvatar = strAvatar;
        dbUser.nSex = sex;

        if(CUserModel::getInstance()->insertUser(dbUser))
        {
            Ret = 0;
            this->_findUser(strName,user);
        }
        else{
            Ret = 2;
        }
    }

    return Ret;
}

bool CInterLoginStrategy::_findUser(const std::string &strName,IM::BaseDefine::UserInfo& user)
{
    bool bRet = false;
    CDBManager* pDBManger = CDBManager::getInstance();
    CDBConn* pDBConn = pDBManger->GetDBConn("teamtalk_slave");
    if (pDBConn) 
    {
        string strSql = "select * from IMUser where name='" + strName + "' and status=0";
        CResultSet* pResultSet = pDBConn->ExecuteQuery(strSql.c_str());
        if(pResultSet)
        {
            string strResult, strSalt;
            uint32_t nId, nGender, nDeptId, nStatus;
            string strNick, strAvatar, strEmail, strRealName, strTel, strDomain,strSignInfo;
            while (pResultSet->Next()) 
            {
                nId = pResultSet->GetInt("id");
                strResult = pResultSet->GetString("password");
                strSalt = pResultSet->GetString("salt");
                
                strNick = pResultSet->GetString("nick");
                nGender = pResultSet->GetInt("sex");
                strRealName = pResultSet->GetString("name");
                strDomain = pResultSet->GetString("domain");
                strTel = pResultSet->GetString("phone");
                strEmail = pResultSet->GetString("email");
                strAvatar = pResultSet->GetString("avatar");
                nDeptId = pResultSet->GetInt("departId");
                nStatus = pResultSet->GetInt("status");
                strSignInfo = pResultSet->GetString("sign_info");

            }

            user.set_user_id(nId);
            user.set_user_nick_name(strNick);
            user.set_user_gender(nGender);
            user.set_user_real_name(strRealName);
            user.set_user_domain(strDomain);
            user.set_user_tel(strTel);
            user.set_email(strEmail);
            user.set_avatar_url(strAvatar);
            user.set_department_id(nDeptId);
            user.set_status(nStatus);
            user.set_sign_info(strSignInfo);
            user.set_password(strResult);
            user.set_salt(strSalt);

            delete  pResultSet;
        }
        pDBManger->RelDBConn(pDBConn);
    }
    return bRet;
}