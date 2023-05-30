-- Create a bikes table
CREATE TABLE bikes (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_name varchar(50) NOT NULL,
    category varchar(50) NOT NULL,
    price varchar(20) NOT NULL,
    description varchar NOT NULL,
);

-- Insert bikes
INSERT INTO bikes
(product_name, category, price, description)
VALUES
( 'Zephyr', 'citybike', '2550', 'Stylish and sleek electric citybike designed for urban adventurers.'),
( 'Notus', 'offroadbike','3980','Offroad ebike designed for adventure and exploration.'),
( 'AuraJunior', 'kidscitybike', '1550', 'Stylish and practical city ebike designed for children.'),
( 'NotusJunior', 'kidsoffroadbike', '2100', 'Adventure-ready off-road e-bike designed specifically for children.');

-- Read bikes
SELECT * FROM bikes;
