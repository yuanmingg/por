/*
Navicat MySQL Data Transfer

Source Server         : yuan
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : cnrmall

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 18:50:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '名字',
  `notice` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `price` varchar(255) DEFAULT NULL COMMENT '价格',
  `color` varchar(255) DEFAULT NULL COMMENT '颜色',
  `speci` varchar(255) DEFAULT NULL COMMENT '规格',
  `turnover` varchar(255) DEFAULT NULL COMMENT '成交量',
  `comment` varchar(255) DEFAULT NULL COMMENT '评论',
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Jowissa璀璨钢带晶钻表', '瑞士原装进口 Jowissa石英手表 璀璨耀眼晶钻钢带 多种颜色可选', '2460.00', '黄色', '黑色表盘J5.008.M ', '1', '1', '../img/list1.jpg');
INSERT INTO `goods` VALUES ('2', 'Jowissa爱恋星辰银色表', '瑞士原装进口 Jowissa石英手表 爱恋星辰银色钢带 颜色四选一', '2280.00', '酒红色', null, '2', '1', '../img/list2.jpg');
INSERT INTO `goods` VALUES ('3', '瑞士JDM三眼运动款石英表', 'JacquesDuManoir 三眼运动款石英表 瑞士整表原装进口 三种颜色可选择', '1039.00', '黑色表带银色表壳', null, '1', '0', '../img/list3.jpg');
INSERT INTO `goods` VALUES ('4', '瑞士HEROS经典女士机械腕表', '瑞士品牌HEROS 女士机械腕表 整表瑞士原装进口 中国红秒针设计', '1980.00', '白色', null, '4', '0', '../img/list4.jpg');
INSERT INTO `goods` VALUES ('5', '瑞士原装进口名爵睿智风范腕表', '名爵 睿智风范腕表 瑞士原装进口 支持专柜验货', '3980.00', '银色', null, '5', '1', '../img/list5.jpg');
SET FOREIGN_KEY_CHECKS=1;
