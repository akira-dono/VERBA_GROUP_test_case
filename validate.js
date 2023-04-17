const crypto = require('crypto');

function hashPassword(password, salt) {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    const hashedPassword = hash.digest('hex');
    return hashedPassword;
};

const validateUser = (user) => {
    const result = [];

    const username = user.login.username;
    const phone = user.phone;
    const email = user.email;
    const password = hashPassword(user.login.password, user.login.salt).toString();

    const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const gender = user.gender;
    const dob = user.dob.date;
    const age = user.dob.age;
    const photo = user.picture.medium;

    const bank = `${user.id.name} ${user.id.value}`;
    const cell = user.cell;

    const location_object = user.location;
    const location = `${location_object.country},${location_object.state},${location_object.city},${location_object.street.name} ${location_object.street.number}`;
    const coordinates = `${location_object.coordinates.latitude} ${location_object.coordinates.longitude}`;
    const timezone = `${location_object.timezone.description} ${location_object.timezone.offset}`;

    const uuid = user.login.uuid;
    const md5 = user.login.md5;
    const sha1 = user.login.sha1;
    const sha256 = user.login.sha256;

    const registered = user.registered.date;
    const registered_age = user.registered.age;

    const nat = user.nat;

    result.push(username, phone, email, password, fullname, gender, dob, age, photo, bank, cell, location, coordinates, timezone, uuid, md5, sha1, sha256, registered, registered_age, nat);
    
    return result;
};

module.exports = validateUser;