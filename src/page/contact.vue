<template>
    <div class="container">
        <div class="contactNav">
            <p>
                <span>群聊</span>
                <span>私聊</span>
            </p>
        </div>
        <div class="main">
            <dl class="talk">
                <dt><img src="../assets/images/head.jpg" alt=""></dt>
                <dd>
                    <h3><span class="time">8:18</span><span>大梦想家</span>的合伙人</h3>

                    <p>系统消息:添加好友成功，快来聊天吧</p>
                </dd>
            </dl>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data ()
    {
        return {}
    }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    body, html {
        width: 100%;
        height: 100%;
        display: flex;
        -webkit-flex-direction: column;
        font-size: 12px;
    }

    #app {
        height: 100%;
    }

    .container {
      width: 100%;
      display: flex;
      -webkit-flex-direction: column;
      height: 100%;
    }

    .contactNav {
        height: 50px;
        line-height: 50px;
        background: #fafafb;
        border-bottom: 1px solid #ccc;
        text-align: center;

    p {

        width: 100%;
        font-size: 16px;

    span {
        margin: 0 10px;
    }

    }
    }
    .main {
        overflow-y: scroll;
        background: #fff;
        height: 85%;
        flex: 1;

    dl.talk {
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #e5e5e5;
        display: flex;

    dt {
        width: 60px;
        height: 60px;
        margin-top: 10px;
        margin-left: 15px;
        border-radius: 50%;
        overflow: hidden;
    }

    img {
        width: 100%
    }

    dd {
        margin-top: 15px;
        margin-left: 10px;
        width: 70%;

    h3 {
        font-size: 18px;
        font-weight: normal;
        line-height: 25px;

    .time {
        float: right;
        font-size: 12px;
    }

    }
    p {
        font-size: 14px;
        margin-top: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    }
    }
    }
</style>