/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100410
 Source Host           : localhost:3306
 Source Schema         : afrigo

 Target Server Type    : MySQL
 Target Server Version : 100410
 File Encoding         : 65001

 Date: 13/03/2021 10:32:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='管理员表';

-- ----------------------------
-- Table structure for t_product
-- ----------------------------
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '标题',
  `sales` int(11) DEFAULT NULL COMMENT '销量',
  `main_pic` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '主图',
  `original_price` decimal(10,2) DEFAULT NULL COMMENT '原价',
  `separate_price` decimal(10,2) DEFAULT NULL COMMENT '单独购买价格',
  `group_price` decimal(10,2) DEFAULT NULL COMMENT '拼团价格',
  `detail` text COLLATE utf8_bin DEFAULT NULL COMMENT '详情',
  `racking` int(11) DEFAULT 0 COMMENT '是否上架：0-不上架 1-上架',
  `cate_id` int(11) DEFAULT NULL COMMENT '分类外键',
  `keywords` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '关键字',
  `is_delete` varchar(1) COLLATE utf8_bin DEFAULT NULL COMMENT '是否删除，0-不删除，1-删除',
  `services` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '商品服务，引用t_service中的serv_id，中间以逗号隔开',
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品表';

-- ----------------------------
-- Table structure for t_product_attribute
-- ----------------------------
DROP TABLE IF EXISTS `t_product_attribute`;
CREATE TABLE `t_product_attribute` (
  `attr_id` int(11) NOT NULL AUTO_INCREMENT,
  `attr_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '属性名称',
  `input_type` int(11) DEFAULT NULL COMMENT '属性输入类型：0->输入框；1->单选；2->多选',
  `value_list` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '可选值列表，以逗号隔开',
  `manually_add` int(11) DEFAULT NULL COMMENT '是否支持手动新增；0->不支持；1->支持',
  `attr_type` int(11) DEFAULT NULL COMMENT '属性的类型；0->规格；1->参数',
  PRIMARY KEY (`attr_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品属性表';

-- ----------------------------
-- Table structure for t_product_category
-- ----------------------------
DROP TABLE IF EXISTS `t_product_category`;
CREATE TABLE `t_product_category` (
  `cate_id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '分类名称',
  `p_cate_id` int(11) DEFAULT NULL COMMENT '分类外键，自关联，0-一级',
  PRIMARY KEY (`cate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品分类表';

-- ----------------------------
-- Table structure for t_product_category_attribute
-- ----------------------------
DROP TABLE IF EXISTS `t_product_category_attribute`;
CREATE TABLE `t_product_category_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_id` int(11) DEFAULT NULL COMMENT '分类外键',
  `attr_id` int(11) DEFAULT NULL COMMENT '属性外键',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品类别和商品属性关联表';

-- ----------------------------
-- Table structure for t_product_img
-- ----------------------------
DROP TABLE IF EXISTS `t_product_img`;
CREATE TABLE `t_product_img` (
  `img_id` int(11) NOT NULL AUTO_INCREMENT,
  `pic_url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '图片地址',
  `is_delete` int(11) DEFAULT NULL COMMENT '是否删除',
  `prod_id` int(11) DEFAULT NULL COMMENT '商品外键',
  PRIMARY KEY (`img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品图片表';

-- ----------------------------
-- Table structure for t_product_question
-- ----------------------------
DROP TABLE IF EXISTS `t_product_question`;
CREATE TABLE `t_product_question` (
  `ques_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '问题内容',
  `reply` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '回复',
  `status` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '状态，0:未审核,1:审核',
  `create_time` timestamp NULL DEFAULT current_timestamp() COMMENT '创建时间',
  `prod_id` int(11) DEFAULT NULL COMMENT '商品外键',
  PRIMARY KEY (`ques_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品答疑表';

-- ----------------------------
-- Table structure for t_product_sku
-- ----------------------------
DROP TABLE IF EXISTS `t_product_sku`;
CREATE TABLE `t_product_sku` (
  `sku_id` int(11) NOT NULL AUTO_INCREMENT,
  `sku_code` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT 'sku编码',
  `prod_id` int(11) DEFAULT NULL COMMENT '所属商品',
  `pic_url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '图片',
  `original_price` decimal(10,2) DEFAULT NULL COMMENT '原价',
  `separate_price` decimal(10,2) DEFAULT NULL COMMENT '单独购买价格',
  `group_price` decimal(10,2) DEFAULT NULL COMMENT '拼团价格',
  `stock` int(11) DEFAULT NULL COMMENT '库存',
  `low_stock` int(11) DEFAULT NULL COMMENT '库存预警',
  `sales` int(11) DEFAULT NULL COMMENT '销量',
  `spec_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '商品规格，json格式',
  `param_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '商品参数，json格式',
  PRIMARY KEY (`sku_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商品SKU表';

-- ----------------------------
-- Table structure for t_service
-- ----------------------------
DROP TABLE IF EXISTS `t_service`;
CREATE TABLE `t_service` (
  `serv_id` int(11) NOT NULL AUTO_INCREMENT,
  `serv_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '服务名称',
  PRIMARY KEY (`serv_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商家服务表';

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '昵称',
  `tel` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '电话',
  `pass` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '头像',
  `gender` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '性别',
  `create_time` timestamp NULL DEFAULT current_timestamp() COMMENT '注册时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户表';

SET FOREIGN_KEY_CHECKS = 1;
