import { TestBed } from '@angular/core/testing';
import { Auth } from './auth.service.service';
describe('Auth.ServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(Auth.ServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth.service.service.spec.js.map