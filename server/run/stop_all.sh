#/bin/sh
#start or stop the im-server


function stop() {
    cd $1

    if [ -e server.pid  ]; then
        pid=`cat server.pid`
        echo "kill pid=$pid"
        kill $pid
        while true
        do
            oldpid=`ps -ef|grep $1|grep $pid`;
            if [ $oldpid" " == $pid" " ]; then
                echo $oldpid" "$pid
                sleep 1
            else
                break
            fi
        done
    fi
    cd ..
}

stop login_server
stop msg_server
stop route_server
stop http_msg_server
stop file_server
stop push_server
stop db_proxy_server
stop msfs
