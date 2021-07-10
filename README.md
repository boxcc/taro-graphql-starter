# taro3-graphql-starter
taro3 + react query + graphql + graphql codegen的项目初始化脚手架

# taro3
taro3的出现, 可以轻松接入react生态和开发工具

# graphql
使用graphql可以轻松进行关联查询和多合一查询 

# graphql codegen
使用codegen可以只需要写好查询语句就能生成对应的Hook, 开发体验极好

可以在codegen.yml进行配置, 在yml修改gql接口地址只会影响schema和generated/graphql的生成. 真正影响hook的gql接口地址在config/dev.js和config/prod.js, 分别对应开发环境和生产环境.