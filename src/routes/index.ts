import React from 'react'
import { Accruals } from '../pages/Accruals'
import { AddVacancy } from '../pages/AddVacancy'
import { LaborMarket } from '../pages/LaborMarket'
import { Login } from '../pages/Login'

import { Main } from '../pages/Main'
import { Recruits } from '../pages/Recruits'
import { ResourcePlan } from '../pages/ResourcePlan'
import { SrDownload } from '../pages/SrDownload'
import { Users } from '../pages/Users'
import { Vacancy } from '../pages/Vacancy'

export interface IRoute {
  path: string
  component: React.ComponentType
}

export enum RouteNames {
  LOGIN = '/login',
  RECOURCEPLAN = '/resourceplan',
  MAIN = '/',
  USERS = '/users',
  ACCRUALS = '/accruals',
  RECRUITS = '/recruits',
  VACANCY = '/vacancy',
  ADDVACANCY = '/addvacancy',
  SRDOWNLOAD = '/srdownload',
  LABORMARKET = '/labormarket',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login },
]
export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.RECOURCEPLAN, component: ResourcePlan },
  { path: RouteNames.USERS, component: Users },
  { path: RouteNames.LABORMARKET, component: LaborMarket },
  { path: RouteNames.ACCRUALS, component: Accruals },
  { path: RouteNames.RECRUITS, component: Recruits },
  { path: RouteNames.RECRUITS+RouteNames.VACANCY, component: Vacancy },
  { path: RouteNames.RECRUITS+RouteNames.ADDVACANCY, component: AddVacancy },
  { path: RouteNames.RECRUITS+RouteNames.SRDOWNLOAD, component: SrDownload },
]

