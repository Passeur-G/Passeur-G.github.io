---
title: "JWT的使用"
author: Passeur-高
date: 2024-04-27
category: 
  -Token
tag: 
  -Token
  -JWT
article: true
---

视频链接：[JWT快速入门](https://www.bilibili.com/video/BV1cK4y197EM?vd_source=67a29e4daedb51b6fbc5a6d3634ecf91)

依赖设置

``` xml
<dependency>
	<groupId>io.jsonwebtoken</groupId>
	<artifactId>jjwt</artifactId>
	<version>0.9.1</version>
</dependency>
//单元测试注解
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
//以下依赖在jdk1.8后的版本加入，如果jdk1.8下只需要加入上面的依赖即可
<dependency>
	<groupId>javax.xml.bind</groupId>
	<artifactId>jaxb-api</artifactId>
	<version>2.3.0</version>
</dependency>
<dependency>
	<groupId>com.sun.xml.bind</groupId>
	<artifactId>jaxb-impl</artifactId>
	<version>2.3.0</version>
</dependency>
<dependency>
	<groupId>com.sun.xml.bind</groupId>
	<artifactId>jaxb-core</artifactId>
	<version>2.3.0</version>
</dependency>
<dependency>
	<groupId>javax.activation</groupId>
	<artifactId>activation</artifactId>
	<version>1.1.1</version>
</dependency>
```

``` java
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
    
public class Use {
    
    private lang time = 1000*60*60*24;
    private String signature = "admin"; //后端自定义的签名信息，用来解析核对token
    
    @org.junit.Test
    public void jwt(){
		JwtBuilder jwtBuilder = Jwts.builder();
        String jwtToken = jwtBuilder
            // header 对应JWT三个部分，设置算法类型和token类型
            .setHeaderParam(s:"typ",o:"JWT")
            .setHeaderParam(s:"alg",o:"HS256")
            //payload 设置用户tom 角色admin 主题admin-test 到期时间一天 设置jwtID
            .claim(s:"username",o:"tom")
            .claim(s:"role",o:"admin")
            .setSubject("admin-test")
            .setExpiration(new Date(System.currentTimeMillis()+time))
            .setId(UUID.randomUUID().toString())
            //Signature 设置签名 添加算法和签名信息
            .signWith(signatureAlgorithm:SignatureAlgorithm.HS256,key:signature)
            .compact();//用“.” 拼接三部分得到token字符串
        System.out.println(jwtToken);//测试生成的token
        
    }
    
    //对token进行解密
    
    @org.junit.Test
    public void parse(){
		String token = "生成的token";
        JwtParser jwtParser = Jwts.parser();
        //根据后端定义的签名信息进行解析，如果解析失败就说明token被修改，解析成功后生成一个类似集合的对象
        Jws<Claims> claimsJws = jwtParser.setSigningKey(signature).parseClaimsJws(token);
        Claims claims = claimsJws.getBody();
        System.out.println(claims.get("username"));//根据key查询取出
    	System.out.println(claims.get("role"));
        System.out.println(claims.getId());
        System.out.println(claims.getSubject());//主题
        System.out.println(claims.getExpiration());//有效期 
    }
}
```

