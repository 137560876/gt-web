/*
 * @Author: qyy
 * @Date: 2020-07-27 11:41:36
 * @LastEditTime: 2020-08-03 11:25:16
 * @LastEditors: qyy
 * @Description: vue 按需导入插件
 */

import Vue from 'vue'
import {
  Pagination,
  Button
} from 'ant-design-vue'
import {
  LocaleProvider
} from 'ant-design-vue'
import {
  Table
} from 'ant-design-vue'
import {
  Tag
} from 'ant-design-vue'
import {
  Divider
} from 'ant-design-vue'
import {
  Icon
} from 'ant-design-vue'
import {
  PageHeader
} from 'ant-design-vue'
import {
  Row,
  Col
} from 'ant-design-vue'
import {
  List,
} from 'ant-design-vue'
import { Avatar } from 'ant-design-vue'

Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Tag.name, Tag)
Vue.component(Divider.name, Divider)
Vue.component(Icon.name, Icon)
Vue.component(PageHeader.name, PageHeader)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(List.name, List)
Vue.component(List.Item.name, List.Item)
Vue.component(List.Item.Meta.name, List.Item.Meta)
Vue.component(Avatar.name, Avatar)
