input.onButtonPressed(Button.A, function () {
    眼睛俯仰角 += 1
})
input.onButtonPressed(Button.B, function () {
    眼睛俯仰角 += -1
})
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
 */
let 眼睛俯仰角 = 0
robotbit.Servo(robotbit.Servos.S1, 180)
basic.forever(function () {
    serial.writeValue("eyelids", 眼睛俯仰角)
})
