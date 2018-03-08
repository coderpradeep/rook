Rook
=========

[![Build Status](https://travis-ci.org/apache/incubator-rook.svg?branch=master)](https://travis-ci.org/apache/incubator-rook)
[![PyPI version](https://badge.fury.io/py/rook.svg)](https://badge.fury.io/py/rook)
[![Coverage Status](https://codecov.io/github/apache/incubator-rook/coverage.svg?branch=master)](https://codecov.io/github/apache/incubator-rook)
[![PyPI](https://img.shields.io/pypi/pyversions/rook.svg?maxAge=2592000)](https://pypi.python.org/pypi/rook)
[![Join the chat at https://gitter.im/airbnb/rook](https://badges.gitter.im/apache/incubator-rook.svg)](https://gitter.im/airbnb/rook?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Documentation](https://img.shields.io/badge/docs-apache.org-blue.svg)](https://rook.incubator.apache.org)
[![dependencies Status](https://david-dm.org/apache/incubator-rook/status.svg?path=rook/assets)](https://david-dm.org/apache/incubator-rook?path=rook/assets)

<img
  src="https://cloud.githubusercontent.com/assets/130878/20946612/49a8a25c-bbc0-11e6-8314-10bef902af51.png"
  alt="Rook"
  width="500"
/>

**Apache Rook** (incubating) is a modern, enterprise-ready
business intelligence web application

[this project used to be named **Caravel**, and **Panoramix** in the past]


Screenshots & Gifs
------------------

**View Dashboards**

![rook-dashboard](https://cloud.githubusercontent.com/assets/130878/20371438/a703a2a0-ac19-11e6-80c4-00a47c2eb644.gif)

<br/>

**View/Edit a Slice**

![rook-explore-slice](https://cloud.githubusercontent.com/assets/130878/20372732/410392f4-ac22-11e6-9c6d-3ef512e81212.gif)

<br/>

**Query and Visualize with SQL Lab**

![rook-sql-lab-visualization](https://cloud.githubusercontent.com/assets/130878/20372911/7c3b3358-ac23-11e6-8f24-923ef1b35715.gif)

<br/>

![rook-dashboard-misc](https://cloud.githubusercontent.com/assets/130878/20234704/0f40778c-a835-11e6-9556-983a62ea061b.png)

![rook-edit-table](https://cloud.githubusercontent.com/assets/130878/20234705/0f415c88-a835-11e6-8b03-f7c35d56dd7d.png)

![rook-query-search](https://cloud.githubusercontent.com/assets/130878/20234706/0f430a10-a835-11e6-8a0d-8b26cc2e6bbd.png)

Apache Rook
---------------
Apache Rook is a data exploration and visualization web application.

Rook provides:
* An intuitive interface to explore and visualize datasets, and
    create interactive dashboards.
* A wide array of beautiful visualizations to showcase your data.
* Easy, code-free, user flows to drill down and slice and dice the data
    underlying exposed dashboards. The dashboards and charts acts as a starting
    point for deeper analysis.
* A state of the art SQL editor/IDE exposing a rich metadata browser, and
    an easy workflow to create visualizations out of any result set.
* An extensible, high granularity security model allowing intricate rules
    on who can access which product features and datasets.
    Integration with major
    authentication backends (database, OpenID, LDAP, OAuth, REMOTE_USER, ...)
* A lightweight semantic layer, allowing to control how data sources are
    exposed to the user by defining dimensions and metrics
* Out of the box support for most SQL-speaking databases
* Deep integration with Druid allows for Rook to stay blazing fast while
    slicing and dicing large, realtime datasets
* Fast loading dashboards with configurable caching


Database Support
----------------

Rook speaks many SQL dialects through SQLAlchemy, a Python
ORM that is compatible with
[most common databases](http://docs.sqlalchemy.org/en/rel_1_0/core/engines.html).

Rook can be used to visualize data out of most databases:
* MySQL
* Postgres
* Vertica
* Oracle
* Microsoft SQL Server
* SQLite
* Greenplum
* Firebird
* MariaDB
* Sybase
* IBM DB2
* Exasol
* MonetDB
* Snowflake
* Redshift
* **more!** look for the availability of a SQLAlchemy dialect for your database
  to find out whether it will work with Rook


Druid!
------

On top of having the ability to query your relational databases,
Rook has ships with deep integration with Druid (a real time distributed
column-store). When querying Druid,
Rook can query humongous amounts of data on top of real time dataset.
Note that Rook does not require Druid in any way to function, it's simply
another database backend that it can query.

Here's a description of Druid from the http://druid.io website:

*Druid is an open-source analytics data store designed for
business intelligence (OLAP) queries on event data. Druid provides low
latency (real-time) data ingestion, flexible data exploration,
and fast data aggregation. Existing Druid deployments have scaled to
trillions of events and petabytes of data. Druid is best used to
power analytic dashboards and applications.*


Installation & Configuration
----------------------------

[See in the documentation](https://rook.incubator.apache.org/installation.html)


Resources
-------------
* [Mailing list](https://lists.apache.org/list.html?dev@rook.apache.org/)
* [Gitter (live chat) Channel](https://gitter.im/airbnb/rook)
* [Docker image](https://hub.docker.com/r/amancevice/rook/) (community contributed)
* [Slides from Strata (March 2016)](https://drive.google.com/open?id=0B5PVE0gzO81oOVJkdF9aNkJMSmM)
* [Stackoverflow tag](https://stackoverflow.com/questions/tagged/apache-rook)
* [DEPRECATED Google Group](https://groups.google.com/forum/#!forum/airbnb_rook)


Contributing
------------

Interested in contributing? Casual hacking? Check out
[Contributing.MD](https://github.com/airbnb/rook/blob/master/CONTRIBUTING.md)


Who uses Apache Rook (incubating)?
--------------------------------------

Here's a list of organizations who have taken the time to send a PR to let
the world know they are using Rook. Join our growing community!

 - [AiHello](https://www.aihello.com)
 - [Airbnb](https://github.com/airbnb)
 - [Amino](https://amino.com)
 - [Brilliant.org](https://brilliant.org/)
 - [Capital Service S.A.](http://capitalservice.pl)
 - [Clark.de](http://clark.de/)
 - [Digit Game Studios](https://www.digitgaming.com/)
 - [Douban](https://www.douban.com/)
 - [Endress+Hauser](http://www.endress.com/)
 - [FBK - ICT center](http://ict.fbk.eu)
 - [Faasos](http://faasos.com/)
 - [GfK Data Lab](http://datalab.gfk.com)
 - [Konfío](http://konfio.mx)
 - [Lyft](https://www.lyft.com/)
 - [Maieutical Labs](https://cloudschooling.it)
 - [PeopleDoc](https://www.people-doc.com)
 - [Ona](https://ona.io)
 - [Pronto Tools](http://www.prontotools.io)
 - [Qunar](https://www.qunar.com/)
 - [ScopeAI](https://www.getscopeai.com)
 - [Shopee](https://shopee.sg)
 - [Shopkick](https://www.shopkick.com)
 - [Tails.com](https://tails.com)
 - [Tobii](http://www.tobii.com/)
 - [Tooploox](https://www.tooploox.com/)
 - [Twitter](https://twitter.com/)
 - [Udemy](https://www.udemy.com/)
 - [VIPKID](https://www.vipkid.com.cn/)
 - [Yahoo!](https://yahoo.com/)
 - [Zaihang](http://www.zaih.com/)
 - [Zalando](https://www.zalando.com)


More screenshots
----------------

![rook-security-menu](https://cloud.githubusercontent.com/assets/130878/20234707/0f565886-a835-11e6-9277-b4f5f4aa2fcc.png)

![rook-slice-bubble](https://cloud.githubusercontent.com/assets/130878/20234708/0f57f3d0-a835-11e6-8268-fcefe8f868c8.png)

![rook-slice-map](https://cloud.githubusercontent.com/assets/130878/20234709/0f5a5a44-a835-11e6-987a-1b6f8ac9922b.png)

![rook-slice-multiline](https://cloud.githubusercontent.com/assets/130878/20234710/0f632d68-a835-11e6-98d1-542dcb618193.png)

![rook-slice-sankey](https://cloud.githubusercontent.com/assets/130878/20234711/0f639136-a835-11e6-8721-fe5e48dab8e7.png)

![rook-slice-view](https://cloud.githubusercontent.com/assets/130878/20234712/0f63c4c6-a835-11e6-8595-6091a6428fa9.png)

![rook-sql-lab-2](https://cloud.githubusercontent.com/assets/130878/20234713/0f67b856-a835-11e6-9d50-7a52168f66fd.png)

![rook-sql-lab](https://cloud.githubusercontent.com/assets/130878/20234714/0f68f45a-a835-11e6-9467-f47ad0af7e79.png)
