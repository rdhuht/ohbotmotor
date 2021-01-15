/**
 * s1, 脖子：0-180，右侧-左侧
 * 
 * s2, 头俯仰角：0-180 上-下
 * 
 * s3, 嘴巴上：0-180，上-下 45闭嘴 0大嘴巴
 * 
 * s4, 嘴巴下：0-180，下-上 45闭嘴 0大嘴巴
 * 
 * s5, 眼睛左右：0-180，右-左，90中
 * 
 * s6, 眼睛俯仰角：0-180，下-上
 * 
 * s7, 眼皮：0-180，闭眼-大眼，90中
 * 
 * p15, 眼睛颜色
 */
function speak (数字: number) {
    for (let index = 0; index < 数字; index++) {
        robotbit.Servo(robotbit.Servos.S3, 45)
        robotbit.Servo(robotbit.Servos.S4, 45)
        basic.pause(500)
        robotbit.Servo(robotbit.Servos.S3, 0)
        robotbit.Servo(robotbit.Servos.S4, 0)
        basic.pause(200)
    }
}
function blink (数字: number) {
    for (let index = 0; index < 数字; index++) {
        robotbit.Servo(robotbit.Servos.S7, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S7, 180)
        basic.pause(500)
    }
}
music.setVolume(255)
soundExpression.yawn.playUntilDone()
basic.forever(function () {
    basic.pause(100)
    blink(3)
})
