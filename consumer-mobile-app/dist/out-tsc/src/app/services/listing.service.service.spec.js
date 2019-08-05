import { TestBed } from '@angular/core/testing';
import { Listing } from './listing.service.service';
describe('Listing.ServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(Listing.ServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=listing.service.service.spec.js.map