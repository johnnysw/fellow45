/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100410
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 100410
 File Encoding         : 65001

 Date: 28/02/2021 19:51:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_blog
-- ----------------------------
DROP TABLE IF EXISTS `t_blog`;
CREATE TABLE `t_blog` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '标题',
  `content` text COLLATE utf8_bin DEFAULT NULL COMMENT '内容',
  `post_time` timestamp NULL DEFAULT current_timestamp() COMMENT '发表时间',
  `read_count` int(11) DEFAULT NULL COMMENT '阅读量',
  `user_id` int(11) DEFAULT NULL COMMENT '用户表外键',
  `is_delete` int(11) DEFAULT 0 COMMENT '标识是否删除记录',
  `cate_id` int(11) DEFAULT NULL COMMENT '分类外键',
  PRIMARY KEY (`blog_id`),
  KEY `user_blog_user_id_fk` (`user_id`),
  KEY `category_blog_cate_id_fk` (`cate_id`),
  CONSTRAINT `category_blog_cate_id_fk` FOREIGN KEY (`cate_id`) REFERENCES `t_category` (`cate_id`) ON DELETE SET NULL,
  CONSTRAINT `user_blog_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_blog
-- ----------------------------
BEGIN;
INSERT INTO `t_blog` VALUES (9, 'haha', 'hehe', '2021-02-24 17:11:44', 20, 1, 0, 1);
INSERT INTO `t_blog` VALUES (10, 'hoho', 'xixi', '2021-02-24 17:11:47', 12, 10, 0, 2);
INSERT INTO `t_blog` VALUES (11, '测试文章', '测试内容', '2021-02-25 09:50:57', 22, 1, 0, 3);
INSERT INTO `t_blog` VALUES (12, '今天天气不错', '哈哈', '2021-02-25 10:05:16', NULL, 12, 0, 2);
INSERT INTO `t_blog` VALUES (13, '心情倍爽', '哈哈哈', '2021-02-25 12:01:20', NULL, NULL, 0, 1);
INSERT INTO `t_blog` VALUES (14, '777', '777', '2021-02-25 12:10:49', NULL, NULL, 0, 1);
INSERT INTO `t_blog` VALUES (15, '7756556', '56565656', '2021-02-25 12:13:38', NULL, 1, 0, 1);
INSERT INTO `t_blog` VALUES (16, '888', '8888', '2021-02-28 15:54:36', NULL, NULL, 0, 2);
INSERT INTO `t_blog` VALUES (17, '888', '888', '2021-02-28 15:55:15', NULL, NULL, 0, 2);
INSERT INTO `t_blog` VALUES (18, '888', '8888', '2021-02-28 15:56:30', NULL, NULL, 0, 2);
INSERT INTO `t_blog` VALUES (19, '888', '8888', '2021-02-28 15:57:41', NULL, NULL, 0, 2);
INSERT INTO `t_blog` VALUES (20, '666', '6666', '2021-02-28 16:01:51', NULL, 1, 0, 2);
INSERT INTO `t_blog` VALUES (21, '666', '6666', '2021-02-28 16:02:41', NULL, 1, 0, 2);
INSERT INTO `t_blog` VALUES (22, '666', '6666', '2021-02-28 16:03:16', NULL, 1, 0, 2);
INSERT INTO `t_blog` VALUES (23, '44', '3333', '2021-02-28 16:07:30', NULL, 1, 0, 2);
INSERT INTO `t_blog` VALUES (24, '44', '3333', '2021-02-28 16:10:52', NULL, 1, 0, 2);
INSERT INTO `t_blog` VALUES (25, '777', '7777', '2021-02-28 16:42:40', NULL, 1, 0, 2);
COMMIT;

-- ----------------------------
-- Table structure for t_category
-- ----------------------------
DROP TABLE IF EXISTS `t_category`;
CREATE TABLE `t_category` (
  `cate_id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '分类名称',
  PRIMARY KEY (`cate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_category
-- ----------------------------
BEGIN;
INSERT INTO `t_category` VALUES (1, '诗歌');
INSERT INTO `t_category` VALUES (2, '散文');
INSERT INTO `t_category` VALUES (3, '小说');
COMMIT;

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_bin DEFAULT NULL COMMENT '评论内容',
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  `blog_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
BEGIN;
INSERT INTO `t_comment` VALUES (1, '好文', '2021-02-25 14:38:30', 14, 9);
INSERT INTO `t_comment` VALUES (2, 'hoho', '2021-02-25 14:39:20', 15, 9);
INSERT INTO `t_comment` VALUES (3, 'ssssss', '2021-02-25 16:10:59', 1, 9);
INSERT INTO `t_comment` VALUES (4, 'tytytyttyty', '2021-02-25 16:11:26', 1, 9);
INSERT INTO `t_comment` VALUES (5, 'sdfsdfsdf', '2021-02-25 16:12:27', 1, 9);
INSERT INTO `t_comment` VALUES (6, 'kkkkk', '2021-02-25 16:19:19', 1, 9);
INSERT INTO `t_comment` VALUES (7, 'ooooo', '2021-02-25 16:19:38', 1, 9);
INSERT INTO `t_comment` VALUES (8, '00000', '2021-02-25 16:22:16', 1, 9);
INSERT INTO `t_comment` VALUES (9, '55555', '2021-02-25 16:23:35', 1, 9);
INSERT INTO `t_comment` VALUES (10, '99999', '2021-02-25 16:23:59', 1, 9);
INSERT INTO `t_comment` VALUES (11, '99999', '2021-02-25 16:26:08', 1, 10);
INSERT INTO `t_comment` VALUES (12, 'ffff', '2021-02-25 16:31:47', 1, 11);
COMMIT;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `pass` varchar(30) COLLATE utf8_bin NOT NULL COMMENT '密码',
  `tel` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '手机号',
  `create_time` timestamp NULL DEFAULT current_timestamp() COMMENT '创建时间',
  `is_delete` int(11) DEFAULT 0 COMMENT '标识是否删除记录',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户表';

-- ----------------------------
-- Records of t_user
-- ----------------------------
BEGIN;
INSERT INTO `t_user` VALUES (1, 'lisi', '123456', '13456789', '2021-02-21 11:30:26', 0);
INSERT INTO `t_user` VALUES (10, 'zhangsan', '123456', '2323', '2021-02-24 16:13:34', 0);
INSERT INTO `t_user` VALUES (11, 'wangwu', '33333', '2323', '2021-02-24 16:14:41', 0);
INSERT INTO `t_user` VALUES (12, 'zhaoliu', 'r444444', '2323', '2021-02-24 16:15:04', 0);
INSERT INTO `t_user` VALUES (13, '55529322pkyj', '4444', '333', '2021-02-24 16:18:35', 0);
INSERT INTO `t_user` VALUES (14, '666', '666', '333', '2021-02-24 16:22:02', 0);
INSERT INTO `t_user` VALUES (15, '666777', '555', '333', '2021-02-24 16:22:57', 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
