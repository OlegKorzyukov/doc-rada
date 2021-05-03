<template>
   <div class="sidebar-img">
      <img src="@/assets/img/logo.png" alt="">
   </div>
   <ul class="sidenav app-sidenav">
       <li v-for="link in links" :key="link.url">
        <router-link :to="link.url" :exact="link.exact" active-class="active" class="link-menu">{{link.title}}</router-link>
       </li>
    </ul>
    <div class="sidebar-archive">
       <span class="sidebar-archive__icon">
          <img src="@/assets/img/icons/archive.svg" alt="Архів">
       </span>
       <a :href="archive" class="sidebar-archive__text">Цифровий Архів</a>
    </div>
</template>

<script>
export default {
   name: 'Sidebar',
   data: () => ({
      archive: 'https://drive.google.com/',
      links: [
         {title: 'Рішення', url: '/decision-ses'},
         {title: 'Проекти рішень', url: '/project-decision'},
         {title: 'Результати голосування', url: '/result-golos'},
         {title: 'Протоколи засідань', url: '/protokol-meet'},
         {title: 'Розпорядження голови', url: '/golova-order'},
         {title: 'Регуляторні акти', url: '/regulatory-acts'},
         {title: 'Регіональні цільові програми', url: '/target-programs'},
         {title: 'Проекти порядку денного сесії', url: '/day-order'},
         {title: 'Регламент', url: '/regulations'},
      ]
   }),
}
</script>

<style>
   .sidebar-img{
      width: 269px;
      height: 94px;
   }
   .sidenav{
      width: 95%;
      margin-top: 84px;
      margin-bottom: 84px;
   }
   .sidenav li{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
   }
   .sidenav li a:hover{
      margin-bottom: 10px;
      margin-top: 20px;
      transform: translateX(8%);
      transition: 0.5s;
   }
   .sidenav li a{
      margin-bottom: -10px;
      background: rgba(127, 161, 169, 0.38);
      padding: 26px 20px;
      text-align: center;
      color: #fff;
      padding-left: 63px;
      text-decoration: none;
      font-weight: 400;
      font-size: 18px;
      width: 100%;
      height: 100%;
      transition: 0.5s;
   }
   .sidenav li a:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border-top: 80px solid #3E5D64;
    border-right: 60px solid rgba(127, 161, 169, 0);
}
.sidenav li .active{
   margin-bottom: 10px;
   margin-top: 20px;
   transform: translateX(8%);
   transition: 0.5s;
}
.sidebar-archive{
   display: flex;
   justify-content: center;
   align-items: center;
}
.sidebar-archive__icon{
   width: 23px;
   height: 23px;
   display: inline-block;
   margin-right: 5px;
}
.sidebar-archive__text{
   color: rgba(128, 186, 255, 1);
   font-weight: 400;
   font-size: 18px;
}
</style>