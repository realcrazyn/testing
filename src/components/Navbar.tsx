import { Layout, Menu, Button } from 'antd'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { RouteNames } from '../routes'
import {
  PieChartOutlined,
  RightOutlined,
  LeftOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  UserOutlined,
  DatabaseOutlined
} from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'

export const Navbar: FC = () => {
  const { isAuth, user } = useTypeSelector((state) => state.auth)

  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      {isAuth ? (
        <Layout.Sider style={{ width: 256 }} collapsed={collapsed}>
          <Menu mode="vertical" theme="dark" style={{ marginTop: 100 }}>
            <Menu.Item
              key="1"
              icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            >
              Свернуть
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<HomeOutlined />}
              onClick={() => {
                navigate(RouteNames.MAIN)
              }}
            >
              На главную
            </Menu.Item>
            <Menu.Item
              key="12"
              icon={<HomeOutlined />}
              onClick={() => {
                navigate(RouteNames.LABORMARKET)
              }}
            >
              Рынок труда
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />} onClick={() => {
              navigate(RouteNames.RECOURCEPLAN)
            }}>
              Ресурсный план
            </Menu.Item>
            <Menu.Item key="4" icon={<DollarCircleOutlined />} onClick={() => {
              navigate(RouteNames.ACCRUALS)
            }}>
              Начисления
            </Menu.Item>
            <Menu.SubMenu title='Рекрутинг' key="5" icon={<UserOutlined />} onTitleClick={() => { navigate(RouteNames.RECRUITS) }}>
         
                <Menu.Item key="6" onClick={()=>{navigate(RouteNames.RECRUITS+RouteNames.VACANCY)}} >Вакинскии</Menu.Item>
                <Menu.Item key="7" onClick={()=>{navigate(RouteNames.RECRUITS+RouteNames.ADDVACANCY)}}>Добавить вакансии</Menu.Item>
                <Menu.Item key="8" onClick={()=>{navigate(RouteNames.RECRUITS+RouteNames.SRDOWNLOAD)}}>Загрузить ШР</Menu.Item>
          
            </Menu.SubMenu>

  
            <Menu.Item key="9" icon={<DatabaseOutlined />} title="Список пользователей" onClick={() => {
              navigate(RouteNames.USERS)
            }}>
              Список пользователей
            </Menu.Item>
  
          </Menu>
        </Layout.Sider>
      ) : (
        <></>
      )}
    </>
  )
}
