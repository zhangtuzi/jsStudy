$(function(){
    new Vue({
        el: '#app',
        data: {
            name:'张三',
            age: 21,
            flag: true,
            nums:[12,4,23,5],
            activeLi: 0,
            user:{
                id: '394',
                name: '夏洛克'
            },
            arr:[
                {
                    name:'heihhei',
                    age:'123'
                },
                {
                    name:'hahha',
                    age:'456'
                }
            ]
        },
        methods:{
            show:function(){
                var _this = this;
                setInterval(function(){
                    if(_this.activeLi<8){
                        _this.activeLi ++;
                    }else{
                         _this.activeLi=1;
                    }
                   
                },1000)
                
                
            }
        }
    })
})




$(function(){
    new Vue({
        el: '#userManage',
        data:{
            newUserName:'',
            newUserAge:'',
            currentIndex:-1,
            isConfirmShow:false,
            delName:'',
            userMessage:[]
        },
        methods:{
            //添加用户
            addUser:function(){
                if(this.isNoEmpty(this.newUserName)&&this.isNoEmpty(this.newUserAge)){
                    var newUser = {
                        name: this.newUserName,
                        age: this.newUserAge
                    }
                    this.userMessage.push(newUser);
                    this.newUserName = '';
                    this.newUserAge = '';
                }
            },
            // 删除用户
            delUser:function(thisIndex){
                this.currentIndex = thisIndex;
                this.isConfirmShow = true;
                this.delName = this.userMessage[thisIndex].name;
            },
            isNoEmpty:function(o){
                if(o && o.trim().length>0){
                    return true;
                }else{
                    return false;
                }
            },
            delConfirm:function(){
                this.userMessage.splice(this.currentIndex,1);
                this.isConfirmShow = false;
            },
            delCancel:function(){
                this.isConfirmShow = false;
            }
        }
    })
})



