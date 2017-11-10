![Selo Dollynho](/assets/selo_dollynho_x1.png?raw=true)

HTTP benchmarks that outputs only `hello world` are very useful, specially
for deciding which framework you should use and how your application will perform
in real life. Because of that this repository has been awarded with the
`Selo Dollynho` stamp, given by the highest tech authority in Brazil: Dollynho
itself.

> Simple HTTP benchmark for different nodejs frameworks using wrk

## Prerequisites

* [wrk](https://github.com/wg/wrk) - how to install [guide](https://github.com/wg/wrk/wiki/Installing-Wrk-on-Linux)

## Installation

```shell
git clone git@github.com:hbakhtiyor/node-frameworks-benchmark.git && cd node-frameworks-benchmark
yarn [install]
```

## How to run or automatically it can run after `yarn install`

```
make
```

After finish the make tasks, look at benchmarks.txt file or your console output.

## Result of benchmarks without measuring cpu/memory usage

Simple HTTP benchmark results (wrk) with `close` connection

```
20220.47 Requests/sec - ukoa.js
13594.83 Requests/sec - ufeathers.js
12812.89 Requests/sec - uexpress.js
4204.16 Requests/sec - total/total.js
3043.56 Requests/sec - rawnode.js
2365.02 Requests/sec - feathers.js
2242.12 Requests/sec - koa.js
1784.28 Requests/sec - micro.js
1698.33 Requests/sec - express.js
1443.69 Requests/sec - restify.js
512.29 Requests/sec - hapi.js
158.26 Requests/sec - uws.js
```

Simple HTTP benchmark results (wrk) with `keep-alive` connection

```
54232.14 Requests/sec - uws.js
21036.52 Requests/sec - ukoa.js
13547.05 Requests/sec - ufeathers.js
13213.85 Requests/sec - micro.js
12514.36 Requests/sec - uexpress.js
12427.84 Requests/sec - rawnode.js
8597.81 Requests/sec - total/total.js
7594.78 Requests/sec - koa.js
5600.86 Requests/sec - express.js
4775.49 Requests/sec - restify.js
2959.22 Requests/sec - feathers.js
1215.46 Requests/sec - sails/sails.js
1077.86 Requests/sec - hapi.js
```

### Hardware used

* Intel® Core™ i3-2310M CPU @ 2.10GHz × 4
* 4Gb RAM

### Version

* Node v7.9.0
* Ubuntu 17.04 LTS x86_64 OS
* 4.10.0-20-generic kernel

### Notes

* Some frameworks used with [uWebSockets](https://github.com/uWebSockets/uWebSockets) server.
* This [runs](https://github.com/hbakhtiyor/node-frameworks-benchmark/blob/master/run#L9-L12) a benchmark for 5 minutes, using 12 threads, and keeping 400 HTTP connections open.
