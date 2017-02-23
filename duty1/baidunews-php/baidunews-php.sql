/*
MySQL Data Transfer
Source Host: localhost
Source Database: baidunews-php
Target Host: localhost
Target Database: baidunews-php
Date: 2017/1/16 14:47:12
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for news
-- ----------------------------
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newtype` char(255) NOT NULL,
  `newtitle` varchar(255) NOT NULL,
  `newsrc` varchar(255) NOT NULL,
  `newimg` varchar(255) NOT NULL,
  `newtime` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `news` VALUES ('1', '搞笑', '&lt;script&gt;alert(2)&lt;/script&gt;', '新浪', 'img/2.jpg', '2018-01-13');
INSERT INTO `news` VALUES ('2', '图片', '图片专题', '极客', 'img/2.jpg', '2017-01-15');
INSERT INTO `news` VALUES ('3', '本地', '本地专题', '极客', 'img/2.jpg', '2017-01-14');
INSERT INTO `news` VALUES ('4', '精选', '测试', '新浪', 'img/2.jpg', '2017-12-31');
INSERT INTO `news` VALUES ('5', '百家', '测试', 'jike', 'img/2.jpg', '2017-01-01');
INSERT INTO `news` VALUES ('6', '娱乐', '胡歌', '新浪', 'img/2.jpg', '2017-01-10');
INSERT INTO `news` VALUES ('7', '军事', '南海', '铁血', 'img/2.jpg', '2017-01-09');
INSERT INTO `news` VALUES ('8', '女人', '女人专题', '新浪', 'img/2.jpg', '2016-01-10');
INSERT INTO `news` VALUES ('9', '互联网', '华为手机', '新浪', 'img/2.jpg', '2016-12-06');
INSERT INTO `news` VALUES ('10', '精选', '&lt;script&gt;alert(10)&lt;/script&gt;', '新浪', 'img/2.jpg', '2017-01-09');
