import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', 
    redirect: { name: 'DecisionSes' } 
  },
  {
    path: '/decision-ses/:convocation',
    name: 'DecisionSes',
    meta: {layout: 'main'},
    component: () => import('../views/DecisionSes.vue')
  },
  {
    path: '/decision-ses',
    name: 'DecisionSesMain',
    meta: {layout: 'main'},
    component: () => import('../views/DecisionSes.vue')
  },
  {
    path: '/decision-ses/*',
    name: 'DecisionSesOther',
    meta: {layout: 'main'},
    component: () => import('../views/DecisionSes.vue')
  },
  {
   path: '/decision-ses-open',
   name: 'DecisionSesOpen',
   meta: {layout: 'main'},
   component: () => import('../views/DecisionSesOpen.vue')
 },
 {
   path: '/day-order',
   name: 'DayOrder',
   meta: {layout: 'main'},
   component: () => import('../views/DayOrder.vue')
 },
 {
   path: '/golova-order',
   name: 'GolovaOrder',
   meta: {layout: 'main'},
   component: () => import('../views/GolovaOrder.vue')
 },
 {
   path: '/project-decision',
   name: 'ProjectDecision',
   meta: {layout: 'main'},
   component: () => import('../views/ProjectDecision.vue')
 },
 {
   path: '/protokol-meet',
   name: 'ProtocolMeet',
   meta: {layout: 'main'},
   component: () => import('../views/ProtocolMeet.vue')
 },
 {
   path: '/protokol-meet-open',
   name: 'ProtocolMeetOpen',
   meta: {layout: 'main'},
   component: () => import('../views/ProtocolMeetOpen.vue')
 },
 {
   path: '/regulations',
   name: 'Regulations',
   meta: {layout: 'main'},
   component: () => import('../views/Regulations.vue')
 },
 {
   path: '/regulatory-acts',
   name: 'RegulatoryActs',
   meta: {layout: 'main'},
   component: () => import('../views/RegulatoryActs.vue')
 },
 {
   path: '/result-golos',
   name: 'ResultGolos',
   meta: {layout: 'main'},
   component: () => import('../views/ResultGolos.vue')
 },
 {
   path: '/result-golos-open',
   name: 'ResultGolosOpen',
   meta: {layout: 'main'},
   component: () => import('../views/ResultGolosOpen.vue')
 },
 {
   path: '/target-programs',
   name: 'TargetPrograms',
   meta: {layout: 'main'},
   component: () => import('../views/TargetPrograms.vue')
 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
