import request from '@/utils/request'
export default {
    gettable(data){
        return request({
            url : 'table/tablelist',
            method:'get',
            params : data
        })
    },
    getusercity(data){
        return request({
            url : 'users/usercity',
            method:'get',
            params : data
        })
    },
    login(data){
        return request({
            url : 'users/login',
            method:'post',
            data :data
        })
    },
    setcity(data){
        return request({
            url : 'users/city',
            method:'post',
            data :data
        })
    },
    addreg(data){
        return request({
            url : 'users/add',
            method:'post',
            data :data
        })
    },
    tableadd(data){
        return request({
            url : 'table/addinfo',
            method:'post',
            data :data
        })
    },
    tableup(data){
        return request({
            url : 'table/upinfo',
            method:'post',
            data :data
        })
    },
    deltable(data){
        return request({
            url : 'table/delinfo',
            method:'post',
            data :data
        })
    },
}

