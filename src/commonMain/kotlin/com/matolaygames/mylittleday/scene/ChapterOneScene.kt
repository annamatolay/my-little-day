package com.matolaygames.mylittleday.scene

import com.matolaygames.common.BaseScene
import com.matolaygames.common.GameState
import com.matolaygames.model.Character
import com.matolaygames.model.Kid
import com.matolaygames.util.showMenuListener
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korev.Key
import com.soywiz.korge.input.keys
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import state

class ChapterOneScene(override val music: NativeSound) : BaseScene() {
    private val player = Kid()

    override suspend fun Container.sceneInit() {
        music.playForever()
        sceneContainer.showMenuListener()
        val welcome = text(
                "MY LITTLE DAY\n\n\n" +
                        "PRESS [SPACE] TO CONTINUE\n\n" +
                        "AND [ESC] FOR MENU\n\nVERSION: 0.0.1"
        ).position(10.0, 10.0)

        val instructions = listOf(
                text("YOU JUST HAVE TO PRESS [SPACE] A FEW MORE TIMES") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("IF YOU PRESS [SPACE]") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("IN THE SAME TIME LIKE YOUR RHYTHM OF YOU HEART") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("THEN I THINK IT'S MORE FUN") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("YOU'RE DOING GOOD ANYWAYS") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("JUST A FEW MORE [SPACE]") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("IS THAT FUNNY, ISN'T IT?\n\n\nIF YES, PLEASE PRESS [SPACE].\n\nIF NO, PLEASE PRESS [SPACE].") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("ONE MORE [SPACE] TO START THE GAME") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("YOU CAN TURN LEFT OR RIGHT WITH [ARROWS] AT THE MOMENT") {
                    position(10.0, 10.0)
                    visible = false
                },
                text("PRESS [SPACE] TO WAKE UP") {
                    position(10.0, 10.0)
                    visible = false
                }
        )


        player.actions = listOf(
                Character.Action.Look.Right.apply {
                    image = image(resourcesVfs["character/face/right_closed-eyes_blue_upscaled.png"].readBitmap()) {
                        position(player.x, player.y)
                        visible = false
                    }
                },
                Character.Action.Look.Left.apply {
                    image = image(resourcesVfs["character/face/left_closed-eyes_blue_upscaled.png"].readBitmap()) {
                        position(player.x, player.y)
                        visible = false
                    }
                }
        )

//        player.actions = listOf(
//                Character.Action.Look.Forward.apply {
//                    image = image(resourcesVfs["character/look/forward_blue.png"].readBitmap()) {
//                        position(player.x, player.y)
//                        visible = false
//                    }
//                },
//                Character.Action.Look.Backward.apply {
//                    image = image(resourcesVfs["character/look/backward_blue.png"].readBitmap()) {
//                        position(player.x, player.y)
//                        visible = false
//                    }
//                }
//        )

        var spaceCounter = -1
        keys {
            onKeyDown { input ->
                if (input.key == Key.SPACE) {
                    welcome.visible = spaceCounter == -1
                    if (spaceCounter > -1 && spaceCounter < instructions.size)
                        instructions[spaceCounter].visible = true
                    if (spaceCounter > 0 && spaceCounter < instructions.size)
                        instructions[spaceCounter - 1].visible = false
                    if (spaceCounter == instructions.size)
                        state = GameState.Running(this@ChapterOneScene)
                    ++spaceCounter
                }
            }
            if (state is GameState.Running) onKeyDown { player.look(it.key) {
                if (spaceCounter == instructions.size - 2) {
                    spaceCounter++
                    instructions[spaceCounter].visible = false
                    instructions[spaceCounter].visible = true
                }
            }
            }
        }
    }
}
