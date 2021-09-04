export class Spot {
    constructor(id, name, description, tags, city, latitude, longitude, visible, userId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.city = city;
        this.latitude = latitude;
        this.longitude = longitude;
        this.visible = visible;
        this.userId = userId;
    }
}