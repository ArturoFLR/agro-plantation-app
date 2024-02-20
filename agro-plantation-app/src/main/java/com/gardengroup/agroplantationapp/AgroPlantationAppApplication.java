package com.gardengroup.agroplantationapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AgroPlantationAppApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(AgroPlantationAppApplication.class, args);
		/*
		docker build -t agro-plantation:1.1 .
		docker pull mysql:8.1
		docker run --name mysql-standalone -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=agroplantationapp -e MYSQL_USER=dev -e MYSQL_PASSWORD=dev -p 3306:3306 -d mysql:8.1
		

		docker image ls

		docker commit nombre_del_contenedor nombre_de_la_imagen
		docker commit 80b1c21fed65 agro-plantation
		docker commit 36b6f8129087 mysql-standalone

		docker tag nombre_de_la_imagen usuario_dockerhub/nombre_del_repositorio
		docker tag agro-plantation mgll3/agro-plantation-app:Api-v1.1
		docker tag mysql-standalone mgll3/agro-plantation-app:Mysql-v1.1
		
		docker push mgll3/agro-plantation-app:Api-v1.1
		docker push mgll3/agro-plantation-app:Mysql-v1.1
		
		*/
		
	}

}

