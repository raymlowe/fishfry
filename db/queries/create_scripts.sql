--drop table tourboat;
create table tourboat (
    id varchar(36) NOT NULL,
	name varchar(256) NOT NULL,
	CONSTRAINT pk_tourboat PRIMARY KEY (id)
);
--drop table swimlane ;
create table swimlane (
    id varchar(36) NOT NULL,
	status varchar(256) NOT NULL,
	CONSTRAINT pk_swimlane PRIMARY KEY (id)
);

--drop table boat_lane;
CREATE TABLE boat_lane (
	boat_id varchar(36) NOT NULL,
	lane_id varchar(36) NOT NULL,
	CONSTRAINT fk_join_tourboat_id FOREIGN KEY (boat_id) REFERENCES tourboat(id),
	CONSTRAINT fk_join_swimlane_id FOREIGN KEY (lane_id) REFERENCES swimlane(id)
);

insert into swimlane values ('1', 'Docked');
insert into swimlane values ('2', 'Outbound to Sea');
insert into swimlane values ('3', 'Inbound to Harbor');
insert into swimlane values ('4', 'Maintenance');
