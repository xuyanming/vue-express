import Vue from 'vue';

const app = {
    state: {
        pageOpenedList: [{
            meta:{ title: "首页",icon: "" },
            path: '/home',
            name: 'homeindex'
        }],
    },
    mutations: {
        removeTag (state, tags) {
            console.log(tags)
            state.pageOpenedList.map((item, index) => {
                if (item.name ===tags.tag) {
                    state.pageOpenedList.splice(index, 1);
                    tags._this.$router.push({name:state.pageOpenedList[index-1].name});
                }
            });
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        pageOpenedList (state, get) {
            let openedPage = state.pageOpenedList[get.index];
            if (get.argu) {
                openedPage.argu = get.argu;
            }
            if (get.query) {
                openedPage.query = get.query;
            }
            state.pageOpenedList.splice(get.index, 1, openedPage);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        clearAllTags (state) {
            state.pageOpenedList.splice(1);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        clearOtherTags (state, vm) {
            let currentName = vm.$route.name;
            let currentIndex = 0;
            state.pageOpenedList.forEach((item, index) => {
                if (item.name === currentName) {
                    currentIndex = index;
                }
            });
            if (currentIndex === 0) {
                state.pageOpenedList.splice(1);
            } else {
                state.pageOpenedList.splice(currentIndex + 1);
                state.pageOpenedList.splice(1, currentIndex - 1);
            }
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        setOpenedList (state) {
            state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) :state.pageOpenedList;
        },
        increateTag (state, tagObj) {
            console.log(state, tagObj)
            state.pageOpenedList.push(tagObj);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        }
       
    }
};

export default app;
