## Blog Spider

### Images
* rabbitmq
* redis
* python
* nginx
* mongo

### Init
 * docker-compose build

### Run
 * docker-compose up -d

### Mongodb

#### First time, should create users of mongodb
  * docker-compose exec mongodb mongo /script/init_admin.js
  * docker-compose exec mongodb mongo /script/init_db.js

#### Bundle js with webpack
  * cd www/static/app/
  * docker pull node
  * docker run --rm -v `pwd`:/webpack -w /webpack node ./build.sh

### Cron job
 * curl -X POST -d "spiders=all" http://<i></i>127.0.0.1:8001/crawl

### Notice
 * iptables: after updating rules, should restart docker

### Todo
#### spider
  * tag: html2txt [ok]
