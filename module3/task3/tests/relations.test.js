const { Boy } = require('../Boy.js');
const { Girl } = require('../Girl.js');

let testBoy;
let testGirl;

describe("Tests", () => {

    describe("The positive tests with boy", () => {

        afterEach(() => {
            testBoy = undefined;
            testGirl = undefined;
        });

        it('check boy wealth', () => {
            testBoy = new Boy('JUNE', 300);
            expect(testBoy.wealth).toBe(300)
        });

        it('check boy birthday month', () => {
            testBoy = new Boy('JUNE', 300);
            expect(testBoy.birthdayMonth).toBe('JUNE')
        });

        it('check boy setbirthday method', () => {
            testBoy = new Boy('JULY', 300);
            testBoy.birthdayMonth = 'JUNE'
            expect(testBoy.isSummerMonth()).toBe('JUNE')
        });

        it('check boy birthday JULY month is summer month', () => {
            testBoy = new Boy('JULY', 300);
            expect(testBoy.isSummerMonth()).toBeTruthy;
        });


        it('check boy birthday AUGUST month is summer month', () => {
            testBoy = new Boy('AUGUST', 300);
            expect(testBoy.isSummerMonth()).toBeTruthy;
        });

        it('check boy birthday JUNE month is summer month', () => {
            testBoy = new Boy('JUNE', 300);
            expect(testBoy.isSummerMonth()).toBeTruthy;
        });

        it('check boy mood, should be EXCELLENT', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testGirl = new Girl(true, true);
            testBoy.girlFriend = testGirl;
            expect(testBoy.getMood()).toBe("EXCELLENT");
        });


        it('get mood function must  be EXCELLENT !', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testBoy.isRich = () => true;
            testBoy.isPrettyGirlFriend = () => true;
            testBoy.isSummerMonth = () => true;
            expect(testBoy.getMood()).toBe("EXCELLENT");
        });

        it('check good mood should be NEUTRAL', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testGirl = new Girl(true, true);
            testBoy.girlFriend = testGirl;
            expect(testBoy.getMood()).toBe('NEUTRAL');
        });

        it('check good  mood function must be NEUTRAL!', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testBoy.isRich = () => true;
            testBoy.isPrettyGirlFriend = () => false;
            testBoy.isSummerMonth = () => true;
            expect(testBoy.getMood()).toBe("NEUTRAL");
        });

        it('check good mood should be GOOD', () => {
            testBoy = new Boy('DECEMBER', 1100000000);
            testGirl = new Girl(true, true);
            testBoy.girlFriend = testGirl;
            expect(testBoy.getMood()).toBe('GOOD');
        });

        it('check good mood function must be GOOD!', () => {
            testBoy = new Boy('December', 500);
            testBoy.isRich = () => true;
            testBoy.isPrettyGirlFriend = () => true;
            testBoy.isSummerMonth = () => false;
            expect(testBoy.getMood()).toBe("GOOD");
        });

        it('check good mood should be BAD', () => {
            testBoy = new Boy('DECEMBER', 500);
            testGirl = new Girl(undefined, undefined);
            testBoy.girlFriend = testGirl;
            expect(testBoy.getMood()).toBe('BAD');
        });

        it('check good mood function must be BAD!', () => {
            testBoy = new Boy();
            testBoy.isRich = () => false;
            testBoy.isPrettyGirlFriend = () => false;
            testBoy.isSummerMonth = () => false;
            expect(testBoy.getMood()).toBe("BAD");
        });

        it('check does spend amount of money', () => {
            testBoy = new Boy('JUNE', 300);
            let moneySpent = 300;
            let result = (testBoy.wealth) - moneySpent;
            testBoy.spendSomeMoney(300);
            expect(testBoy.wealth).toBe(result);
        });

        it('check does spend more money than hew have', () => {
            testBoy = new Boy('JUNE', 300);
            let moneySpent = 500;
            let result = (testBoy.wealth) - moneySpent;
            testBoy.spendSomeMoney(300);
            expect(testBoy.wealth).toBe(result);
        });

        it('has boy pretty girl', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testGirl = new Girl(true, true);
            testBoy.girlFriend = testGirl;
            expect(testBoy.isPrettyGirlFriend()).toBeTruthy();
        });
    });

    describe("The negative tests with boy", () => {
        afterEach(() => {
            testBoy = undefined;
            testGirl = undefined;
        });

        it('check boy birthday December month is summer month', () => {
            testBoy = new Boy('December', 300);
            expect(testBoy.isSummerMonth()).toBeTruthy();
        });

        it('check boy wealth with string value', () => {
            testBoy = new Boy('JUNE', "300");
            expect(testBoy.wealth).toBe(300)
        });

        it('check boy wealth with negative value', () => {
            testBoy = new Boy('JUNE', -300);
            expect(testBoy.wealth).toBe(300)
        });
    });

    describe("The positive tests with girl", () => {
        afterEach(() => {
            testBoy = undefined;
            testGirl = undefined;
        });

        it('the girl is pretty', () => {
            testGirl = new Girl(true, true);
            expect(testGirl.isPretty).toBeTruthy();
        });

        it('the girl is slim friend got a few kilos', () => {
            testGirl = new Girl(true, true);
            expect(testGirl.isSlimFriendGotAFewKilos).toBeTruthy();
        });

        it('does girl has rich boyfriend', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testGirl = new Girl(true, true);
            testGirl.boyFriend = testBoy;
            expect(testGirl.isBoyfriendRich()).toBeTruthy();
        });

        it('does girl has rich boyfriend, she is pretty and Boy Friend Will Buy New Shoes', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testGirl = new Girl(true, true);
            testGirl.boyFriend = testBoy;
            expect(testGirl.isBoyFriendWillBuyNewShoes()).toBeTruthy();
        });

        it('does girl Slim Friend Became Fat', () => {
            testGirl = new Girl(true, true);
            expect(testGirl.isSlimFriendBecameFat).toBeTruthy();
        });

        it('pretty girl has rich boyfiend should have excellent mood ', () => {
            testBoy = new Boy('JUNE', 1100000000);
            testGirl = new Girl(true, true);
            testGirl.boyFriend = testBoy;
            expect(testGirl.getMood()).toBe("EXCELLENT");
        });

        it('girl mood must be EXCELLENT', () => {
            testGirl = new Girl();
            testGirl.isSlimFriendBecameFat = () => true;
            testGirl.isPretty = () => true;
            testGirl.isBoyfriendRich = () => true;
            testGirl.isBoyFriendWillBuyNewShoes = () => true;
            expect(testGirl.getMood()).toBe("EXCELLENT");
        });

        it('pretty girl has boyfiend should have good mood ', () => {
            testBoy = new Boy('JUNE', 500);
            testGirl = new Girl(true, true);
            testGirl.boyFriend = testBoy;
            expect(testGirl.getMood()).toBe("GOOD");
        });

        it('girl mood must be GOOD', () => {
            testGirl = new Girl();
            testGirl.isBoyFriendWillBuyNewShoes = () => false;
            testGirl.isSlimFriendBecameFat = () => false;
            testGirl.isPretty = () => true;
            testGirl.isBoyfriendRich = () => true;
            expect(testGirl.getMood()).toBe("GOOD");
        });

        it('pretty girl should have neutral mood ', () => {

            testBoy = new Boy('JUNE', 500);
            testGirl = new Girl(undefined, true);
            testGirl.boyFriend = testBoy;
            expect(testGirl.getMood()).toBe("NEUTRAL");
        });

        it('girl mood must be NEUTRAL', () => {
            testGirl = new Girl();
            testGirl.isBoyFriendWillBuyNewShoes = () => false;
            testGirl.isSlimFriendBecameFat = () => true;
            testGirl.isPretty = () => false;
            testGirl.isBoyfriendRich = () => false;
            expect(testGirl.getMood()).toBe("NEUTRAL");
        });

        it('pretty girl should have BAD mood ', () => {
            testBoy = new Boy('DECEMBER', 500);
            testGirl = new Girl();
            testGirl.boyFriend = testBoy;
            expect(testGirl.getMood()).toBe("BAD");
        });

        it('girl mood must be BAD', () => {
            testGirl = new Girl();
            testGirl.isBoyFriendWillBuyNewShoes = () => false;
            testGirl.isSlimFriendBecameFat = () => false;
            testGirl.isPretty = () => false;
            testGirl.isBoyfriendRich = () => false;
            expect(testGirl.getMood()).toBe("BAD");
        });

        it('should spend amount of boyfriend money', () => {
            testBoy = new Boy('JUNE', 100000000);
            testGirl = new Girl();
            testGirl.boyFriend = testBoy;
            testGirl.isBoyfriendRich = () => true;
            testGirl.spendBoyFriendMoney(500);
            expect(testGirl.spendBoyFriendMoney()).toBe(500)
        });

        it('pretty girl should have bad mood', () => {
            testGirl = new Girl();
            testGirl.isSlimFriendGotAFewKilos = () => true;
            testGirl.isPretty = () => true;
            expect(testGirl.isSlimFriendBecameFat()).toBeTruthy();
        });

    });
});
