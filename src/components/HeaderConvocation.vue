<template>
   <div class="header-convocation-wrapper">
      <h2 class="header-convocation-wrapper__title">{{title}}</h2>
      <span class="header-convocation-wrapper__convocation">скликання</span>
      <div class="header-convocation__list-wrapper">
         <div class="header-convocation__list">
            <div class="main-list">
               <span class="item" v-for="(item, index) in listConvocation" :key="index">
                  <router-link @click="clickHeader($event)" :to="item.url" :exact="item.exact" active-class="active" class="item-link" :data-id="index">{{item.name}}</router-link>
               </span>
            </div>
         </div>
      <img :src="line" class="header-convocation-wrapper__line">
      </div>
   </div>
</template>
<script>
export default {
   name: 'HeaderConvocation',
   data: () => ({
      title: 'Рішення сесій',
      line: require('@/assets/img/icons/HeaderConvocation_line.svg'),
      listConvocation: [
         {name: 'IV', url: '/decision-ses/4'},
         {name: 'V', url: '/decision-ses/5'},
         {name: 'VI', url: '/decision-ses/6'},
         {name: 'VII', url: '/decision-ses/7'},
         {name:'VIII', url: '/decision-ses/8'},
         {name: 'IX', url: '/decision-ses/9'},
         {name: 'X', url: '/decision-ses/10'}],
      showConvocation: 3,
      widthLine: 0,
      widthElement: 0,
      countSlideElem: 1,
   }),
   methods: {
      clickHeader(event){
         let convocationIndex = 1;
         let position = 0;
         const list = document.querySelector('.main-list');
         const listElems = document.querySelectorAll('.main-list a');
         const activeElem = document.querySelector('.main-list .active-item');

         activeElem.classList.remove("active-item");
         activeElem.classList.add("next-item");
         event.target.classList.add("active-item");

         console.log(event);

         let className = event.target.className;
         if(className.includes('before-item')){
            event.target.classList.remove("before-item");
            position += this.widthElement * this.countSlideElem;
            let getNewPosition = list.offsetLeft + position;
            if(list.offsetLeft < position){
               list.style.marginLeft = getNewPosition + 'px';
            }
         }else if(className.includes('next-item')){
            position -= this.widthElement * this.countSlideElem;
            let getNewPosition = list.offsetLeft + position;
            list.style.marginLeft = getNewPosition + 'px';
         }
      },
      calculatedWidthItems() {
         this.widthLine = document.querySelector('.header-convocation-wrapper__line').offsetWidth;
         this.widthElement = this.widthLine / this.showConvocation;
         const elem = document.querySelectorAll('.header-convocation__list .item');
         elem.forEach(element => {
            element.style.width = this.widthElement + 'px';
         });
      },
      setStartPositionConvocation(){
         const list = document.querySelector('.main-list');
         let showLastElem = this.widthElement * (this.listConvocation.length + 1)  - this.widthLine ;
         list.style.marginLeft = '-' + showLastElem + 'px';
      },
      setStartClassItems(){
         //let getId = event.currentTarget.dataset.id;
         //document.classList.remove("active-item");
         const listElems = document.querySelector('.main-list');
         listElems.lastElementChild.firstChild.classList.add("active-item");
         listElems.lastElementChild.previousSibling.firstChild.classList.add("before-item");
      },
   },
   mounted() {
      this.calculatedWidthItems();
      this.setStartPositionConvocation();
      this.setStartClassItems();
   }
}
</script>
<style>
   .header-convocation-wrapper{
      position: fixed;
      transform: translateX(50%);
   }
   .header-convocation-wrapper__title, .header-convocation-wrapper__convocation {
      font-weight: bold;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      color: #7A7A7A;
      margin: 0;
   }
  .header-convocation-wrapper__convocation{
      font-size: 18px;
      line-height: 21px;
      display: block;
      margin-top: 10px;
  }
  .header-convocation-wrapper__line{
      width: 773px;
      height: 18px;
      position: relative;
  }
  .main-list{
      width: 9999px;
      display: flex;
      margin: 0;
      padding: 0;
      transition: margin-left 250ms;
  }
  .header-convocation__list-wrapper{
     margin-top: 20px;
     overflow: hidden;
  }
  .header-convocation__list{
   position: relative;
   width: 773px;
   overflow: hidden;

  }
  .header-convocation__list .item{
      width: 250px;
      text-align: center;
  }
  .header-convocation__list .item-link{
      border: 2px solid;
      padding: 2px;
      font-size: 22px;
      text-decoration: none;
      font-weight: bold;
      color: #AAA7A7;
  }
  .header-convocation__list .list-actual{
      font-size: 28px;
      line-height: 28px;
      border: none;
      color: #7A7A7A;
      position: relative;
  }
  .header-convocation__list .list-actual::after{
      content: '';
      width: 3px;
      height: 16px;
      background: #7A7A7A;
      display: block;
      position: absolute;
      z-index: 2;
      left: 50%;
      bottom: -16px;
  }
</style>