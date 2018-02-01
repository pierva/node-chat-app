var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage("Piervalerio", "Hello");

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: message.from,
            text: message.text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location obj', () => {
        var from = "Piervalerio";
        var lat = 15;
        var long = -44;
        var locationMessage = generateLocationMessage(from, lat, long);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({from});
        expect(locationMessage.url).toBe("https://www.google.com/maps?q=15,-44");
    });
});
