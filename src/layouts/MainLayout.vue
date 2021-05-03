<template>
<aside class="sidebar-wrapper">
   <Sidebar />
</aside>
   <main class="app-content">
      <div class="app-page">
         <router-view />
      </div>
   </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
   name: 'MainLayout',
   components:{
      Sidebar
   }
}
</script>

<style>
   .sidebar-wrapper{
      position: fixed;
      width: 20%;
      height: 100vh;
      left: 0px;
      top: 0px;
      background: #3E5D64;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px 30px 20px;
   }
   .app-content{
      width: 76%;
      margin-left: auto;
      height: 5000px;
      background: #f7f5f5;
      padding: 30px 20px 30px 20px;
   }
</style>