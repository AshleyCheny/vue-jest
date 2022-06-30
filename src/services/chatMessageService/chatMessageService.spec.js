/**
 *  Test setup and teardown with Jest
 * 
 *  beforeEach
 *  Timing: Pior
 *  Usage: Initilization
 * 
 *  afterEach
 *  Timing: After
 *  Usage: Cleanup
 * 
 *  beforeAll/afterAll
 *  Usage: Suite-wide setup and teardown
 */

import { ChatMessageService } from './index';

describe("Chat Message Service", () => {
    it.todo("should return an array of messages");

    it('should add messages', async () => {
        expect(await ChatMessageService.getMessages()).toHaveLength(2);
    });
});