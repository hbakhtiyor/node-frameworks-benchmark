all:
	@./run aero.js
	@./run express.js
	@./run hapi.js
	@./run rawnode.js
	@./run restify.js
	@./run koa.js
	@./run total/total.js
	@./run micro.js
	@./run sails/sails.js
	@./run feathers.js
	@./run uws.js
	@./run ukoa.js
	@./run uexpress.js
	@./run ufeathers.js
	@echo | tee -a benchmarks.txt
	@echo 'Simple HTTP benchmark results (wrk) with close connection' | tee -a benchmarks.txt
	@sort -nr results.txt | tee -a benchmarks.txt
	@rm results.txt
	@./run aero.js keep-alive
	@./run express.js keep-alive
	@./run hapi.js keep-alive
	@./run rawnode.js keep-alive
	@./run restify.js keep-alive
	@./run koa.js keep-alive
	@./run total/total.js keep-alive
	@./run micro.js keep-alive
	@./run sails/sails.js keep-alive
	@./run feathers.js keep-alive
	@./run uws.js keep-alive
	@./run ukoa.js keep-alive
	@./run uexpress.js keep-alive
	@./run ufeathers.js keep-alive
	@echo | tee -a benchmarks.txt
	@echo 'Simple HTTP benchmark results (wrk) with keep-alive connection' | tee -a benchmarks.txt
	@sort -nr results.txt | tee -a benchmarks.txt
	@rm results.txt

.PHONY: all
