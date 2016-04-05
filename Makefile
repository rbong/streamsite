install:
	if [ ! -d phantomjs-flash ]; then\
		git clone https://github.com/rbong/phantomjs-flash;\
		cp phantomjs-flash/flash.js etc/streamsite/js;\
	fi
	cp -r bin/* /usr/local/bin
	cp -r etc/* /usr/local/etc

uninstall:
	cd ./etc &&\
	    for file in *; do\
		rm -rf /usr/local/etc/$$file;\
	    done
	cd ./bin &&\
	    for file in *; do\
		rm -rf /usr/local/bin/$$file;\
	    done
