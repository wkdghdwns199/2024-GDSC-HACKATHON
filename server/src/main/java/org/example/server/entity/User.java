package org.example.server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Setter
@Getter
@Entity
public class User {

	@Id
	private String user_id;
	private String user_name;
	@Column(name = "create_time", updatable = false, insertable = false)
	private Timestamp create_time;

}
