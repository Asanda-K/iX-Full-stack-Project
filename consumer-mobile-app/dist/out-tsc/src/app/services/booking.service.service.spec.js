import { TestBed } from '@angular/core/testing';
import { Booking } from './booking.service.service';
describe('Booking.ServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(Booking.ServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=booking.service.service.spec.js.map