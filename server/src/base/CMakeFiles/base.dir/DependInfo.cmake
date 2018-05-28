# The set of languages for which implicit dependencies are needed:
SET(CMAKE_DEPENDS_LANGUAGES
  "CXX"
  )
# The set of files for implicit dependencies of each language:
SET(CMAKE_DEPENDS_CHECK_CXX
  "/root/TeamIM/server/src/base/Base64.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/Base64.cpp.o"
  "/root/TeamIM/server/src/base/BaseSocket.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/BaseSocket.cpp.o"
  "/root/TeamIM/server/src/base/Condition.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/Condition.cpp.o"
  "/root/TeamIM/server/src/base/ConfigFileReader.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/ConfigFileReader.cpp.o"
  "/root/TeamIM/server/src/base/EncDec.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/EncDec.cpp.o"
  "/root/TeamIM/server/src/base/EventDispatch.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/EventDispatch.cpp.o"
  "/root/TeamIM/server/src/base/HttpClient.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/HttpClient.cpp.o"
  "/root/TeamIM/server/src/base/HttpParserWrapper.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/HttpParserWrapper.cpp.o"
  "/root/TeamIM/server/src/base/ImPduBase.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/ImPduBase.cpp.o"
  "/root/TeamIM/server/src/base/Lock.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/Lock.cpp.o"
  "/root/TeamIM/server/src/base/ServInfo.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/ServInfo.cpp.o"
  "/root/TeamIM/server/src/base/Thread.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/Thread.cpp.o"
  "/root/TeamIM/server/src/base/ThreadPool.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/ThreadPool.cpp.o"
  "/root/TeamIM/server/src/base/TokenValidator.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/TokenValidator.cpp.o"
  "/root/TeamIM/server/src/base/UtilPdu.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/UtilPdu.cpp.o"
  "/root/TeamIM/server/src/base/http_parser.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/http_parser.cpp.o"
  "/root/TeamIM/server/src/base/im_conn_util.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/im_conn_util.cpp.o"
  "/root/TeamIM/server/src/base/imconn.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/imconn.cpp.o"
  "/root/TeamIM/server/src/base/jsoncpp/json_reader.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/jsoncpp/json_reader.cpp.o"
  "/root/TeamIM/server/src/base/jsoncpp/json_value.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/jsoncpp/json_value.cpp.o"
  "/root/TeamIM/server/src/base/jsoncpp/json_writer.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/jsoncpp/json_writer.cpp.o"
  "/root/TeamIM/server/src/base/log4z.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/log4z.cpp.o"
  "/root/TeamIM/server/src/base/netlib.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/netlib.cpp.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.BaseDefine.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.BaseDefine.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.Buddy.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.Buddy.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.File.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.File.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.Group.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.Group.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.Login.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.Login.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.Message.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.Message.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.Other.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.Other.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.Server.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.Server.pb.cc.o"
  "/root/TeamIM/server/src/base/pb/protocol/IM.SwitchService.pb.cc" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/pb/protocol/IM.SwitchService.pb.cc.o"
  "/root/TeamIM/server/src/base/util.cpp" "/root/TeamIM/server/src/base/CMakeFiles/base.dir/util.cpp.o"
  )
SET(CMAKE_CXX_COMPILER_ID "GNU")

# Preprocessor definitions for this target.
SET(CMAKE_TARGET_DEFINITIONS
  "AC_HAS_CRITICAL"
  "AC_HAS_DEBUG"
  "AC_HAS_ERROR"
  "AC_HAS_INFO"
  "AC_HAS_WARNING"
  "LINUX_DAEMON"
  "TIXML_USE_STL"
  "_FILE_OFFSET_BITS=64"
  "_REENTRANT"
  )

# Targets to which this target links.
SET(CMAKE_TARGET_LINKED_INFO_FILES
  )

# The include file search paths:
SET(CMAKE_C_TARGET_INCLUDE_PATH
  "."
  ".."
  "./jsoncpp"
  "./pb"
  "./pb/protocol"
  )
SET(CMAKE_CXX_TARGET_INCLUDE_PATH ${CMAKE_C_TARGET_INCLUDE_PATH})
SET(CMAKE_Fortran_TARGET_INCLUDE_PATH ${CMAKE_C_TARGET_INCLUDE_PATH})
SET(CMAKE_ASM_TARGET_INCLUDE_PATH ${CMAKE_C_TARGET_INCLUDE_PATH})
