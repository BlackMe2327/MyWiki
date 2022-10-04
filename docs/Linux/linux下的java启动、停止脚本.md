# Linux下的java启动、停止脚本
```shell
#!/bin/bash
#description: RestfulWebService
PRG_HOME=/ainmc/work/RestfulWebService
PRG_KEYWORD=restfulServer
PRG=$PRG_HOME/server.sh
#配置jdk路径
JAVA_HOME=/home/nmcweb/jdk1.6.0_45
jvmOpt="-Xms1024m -Xmx1024m"
PRG_RUN_USER=nmcuser
pidFile=$PRG_HOME/status/server.pid
MAIN_CLASS=com.ai.restful.Server
cd $PRG_HOME
function start(){
        echo "will start RestfulWebService"
        export CLASSPATH=.
        for jar in `ls $PRG_HOME/lib/*.jar`
        do
                CLASSPATH=$CLASSPATH:$jar
        done
        nohup "$JAVA_HOME"/bin/java -Djobname="$PRG_KEYWORD" -cp "$CLASSPATH" $jvmOpt -Dlogback.configurationFile=$PRG_HOME/conf/logback.xml -Dfile.encoding=utf-8 $MAIN_CLASS >/dev/null 2>&1&
        for(( i=1;i<=10;i++));do
                if [ -e $PRG_HOME/status/server.pid ]; then
                        echo "RestfulWebService is started,pid=`cat $pidFile`"
                        break
                fi
                sleep 2
        done
}


case "$1" in
start)
        if [ -e $pidFile ]; then
                pid=`cat $pidFile`
                tpid=`ps -ef | grep java | grep -v grep | grep $PRG_KEYWORD | grep -c " $PRG_RUN_USER "`
                if [ $tpid -lt 1 ]; then
                        start
                else
                        echo "RestfulWebService already started!! pid="$pid
                fi
        else
                tpid=`ps -ef | grep java | grep -v grep | grep $PRG_KEYWORD | grep -c " $PRG_RUN_USER "`
                pid=`ps -ef | grep java | grep -v grep | grep $PRG_KEYWORD | grep " $PRG_RUN_USER " | awk '{print $2}'`
                if [ $tpid -lt 1 ]; then
                        start
                else
                        echo "RestfulWebService already started!! pid="$pid
                        echo "$pid">server.pid
                fi
        fi
;;

stop)
        if [ -e $pidFile ]; then
                pid=`cat $pidFile`
                echo "will kill $pid"
                kill -9 $pid
                rm $pidFile
                echo "RestfulWebService already stop!!"
        else
                pid=`ps -ef | grep java | grep -v grep | grep $PRG_KEYWORD | grep " $PRG_RUN_USER " | awk '{print $2}'`
                echo "will kill $pid"
                ps -ef | grep java | grep -v grep  | grep $PRG_KEYWORD | grep " $PRG_RUN_USER " | awk '{print $2}' | xargs kill -9
                echo "RestfulWebService already stop!!"
        fi
;;

restart)
        echo "RestfulWebService service restart..."
        $PRG stop
        sleep 1
        $PRG start
;;

*)
        echo "Usage: server.sh (start|stop|restart)"
esac
```

