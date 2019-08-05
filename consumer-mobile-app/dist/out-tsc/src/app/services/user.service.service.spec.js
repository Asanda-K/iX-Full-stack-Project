import { TestBed } from '@angular/core/testing';
import { User } from './user.service.service';
describe('User.ServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(User.ServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user.service.service.spec.js.map