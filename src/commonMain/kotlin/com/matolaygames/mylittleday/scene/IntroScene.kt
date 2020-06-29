package com.matolaygames.mylittleday.scene

import com.matolaygames.common.BaseScene
import com.matolaygames.common.GameState
import com.matolaygames.model.Character
import com.matolaygames.model.Kid
import com.matolaygames.model.create
import com.matolaygames.util.navigateToMenu
import com.matolaygames.util.showMenuListener
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korev.Key
import com.soywiz.korge.input.keys
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import state
import kotlin.random.Random

//class IntroScene() : BaseScene() {
class IntroScene(override val music: NativeSound) : BaseScene() {

    private var playerName: Kid.Name = Kid.Name.Extrovert("")

    private val player = Kid()

    override suspend fun Container.sceneInit() {
        channel = music.playForever()
        sceneContainer.showMenuListener()

        var whoami = player.whoami()
        val welcome = createText(
                "MY LITTLE DAY\n\n\n" +
                        "PRESS [SPACE] TO CONTINUE\n\n" +
                        "AND [ESC] FOR MENU\n\nVERSION: 0.0.1",
                position = Pair(10.0, 10.0),
                isVisible = true,
                alignment = Alignment.Left
        )
        val pickNameText = createText("WHO ARE YOU\n\n\n[K]: JUST A KID\n\n[N]: NOBODY\n\n[R] I DON'T CARE")
        val lookAroundInstruction = createText(
                "YOU CAN TURN LEFT OR RIGHT WITH [ARROWS] AT THE MOMENT",
                alignment = Alignment.Left
        )
        val startCinematicInstruction = createText("PRESS [SPACE] TO WAKE UP...", position = Pair(32.0, 32.0), alignment = Alignment.Left)
        val instructions = mutableListOf(
                createText(
                        "YOU JUST HAVE TO PRESS [SPACE]\n\n " +
                                "A FEW MORE TIMES TO FINISH WITH CHARACTER CREATION",
                        position = Pair(x - 12.0, y - 6.0),
                        alignment = Alignment.Left
                ),
                createText("TEMPLATE"),
                createText(
                        when (playerName) {
                            Kid.names[0] ->
                                "I HOPE YOU READY\n\nLET'S SEE WHAT THE FUTURE HOLD FOR YOU!"
                            Kid.names[1] ->
                                "YOU KNOW YOU COULD BE A BIT MORE OPTIMISTIC.\n\n" +
                                        "PERHAPS, I'LL BE SOMEONE AFTER ALL."
                            Kid.names[2] -> "..."
                            else -> "I WASN'T PREPARED FOR THIS :O"
                        }
                ),
                createText("ANYWAYS, IF YOU PRESS [SPACE]", alignment = Alignment.Left),
                createText("IN THE SAME TIME LIKE YOUR RHYTHM OF YOU HEART", alignment = Alignment.Left, position = Pair(x + 1 * 4, y)),
                createText("OR FOLLOW THE RHYTHM OF THIS COOL SONG", alignment = Alignment.Left, position = Pair(x + 2 * 4, y)),
                createText("THEN I THINK IT'S MORE FUN", alignment = Alignment.Left, position = Pair(x + 3 * 4, y)),
                createText("YOU'RE DOING GOOD, BY THE WAY"),
                createText("JUST A FEW MORE [SPACE] LEFT"),
                createText("ONE MORE [SPACE] TO START THE GAME"),
                createText(
                        "IS THAT FUNNY, ISN'T IT?\n\n\n" +
                                "IF YES, PLEASE PRESS [SPACE]\n\n" +
                                "IF NO, PLEASE PRESS [SPACE]"
                )
        )

        player.actions = listOf(
                Character.Action.Look.Left.apply {
                    image = image(resourcesVfs["character/face/left_closed-eyes_blue_upscaled.png"].readBitmap()) {
                        position(player.x, player.y)
                        visible = false
                    }
                },
                Character.Action.Look.Right.apply {
                    image = image(resourcesVfs["character/face/right_closed-eyes_blue_upscaled.png"].readBitmap()) {
                        position(player.x, player.y)
                        visible = false
                    }
                }
        )

        var spaceCounter = -1
        keys {
            onKeyDown { input ->
                if (state is GameState.Running) {
                    onKeyDown {
                        player.look(it.key) {
                            if (spaceCounter == instructions.size - 2) {
                                instructions[spaceCounter].visible = false
                                instructions[spaceCounter].visible = true
                            }
                        }
                    }
                }
                if (welcome.visible && input.key == Key.SPACE) {
                    welcome.visible = false
                    pickNameText.visible = true
                } else if (pickNameText.visible) {
                    when (input.key) {
                        Key.K -> player.pickName(0) { updateUiAction(instructions, pickNameText) }
                        Key.N -> player.pickName(1) { updateUiAction(instructions, pickNameText) }
                        Key.R -> player.pickName(Random.nextInt(3)) { updateUiAction(instructions, pickNameText) }
                        else -> Unit
                    }
                } else {
                    if (spaceCounter == -1) spaceCounter = 0
                    when (input.key) {
                        Key.SPACE -> {
                            ++spaceCounter
                            if (spaceCounter == 1) {
                                instructions.first().visible = false
                                instructions[1] =
                                        createText("SO, YOU ARE \"$playerName\" RIGHT NOW.\n\nTHIS IS _YOUR_ NAME.\n\nI SEE...")
                            } else if (spaceCounter == instructions.size) {
                                state = GameState.Running(this@IntroScene)
                                player.actions[0].image.visible = true
                                instructions.last().visible = false
                                lookAroundInstruction.visible = true
                            } else if (lookAroundInstruction.visible) {
                                lookAroundInstruction.visible = false
                                startCinematicInstruction.visible = true
                            } else if (spaceCounter > instructions.size) {
                                startCinematicInstruction.visible = false
                            } else if (startCinematicInstruction.visible) {
                                sceneContainer.navigateToMenu()
                            } else {
                                if (spaceCounter > -1 && spaceCounter < instructions.size)
                                    instructions[spaceCounter].visible = true
                                if (spaceCounter > 0 && spaceCounter < instructions.size)
                                    instructions[spaceCounter - 1].visible = false
                            }
                        }
                        else -> Unit
                    }
                }
            }
        }
    }

    private fun Container.createText(
            text: String,
            isVisible: Boolean = false,
            alignment: Alignment = Alignment.Centered,
            position: Pair<Double, Double>? = null
    ): Text = text(text) {
        val defaultPos = Pair(views.actualVirtualWidth / 2.0, views.actualVirtualHeight / 2.0)
        val (actualX, actualY) = position ?: defaultPos
        position(actualX, actualY)
        align(alignment)
        visible = isVisible
    }

    fun Text.align(alignment: Alignment) {
        when (alignment) {
            is Alignment.Centered -> this.position(this.x - this.width / 2, this.y - this.height / 2)
            else -> this.position(this.x + alignment.x, this.y + alignment.y)
        }
    }

    sealed class Alignment(val x: Double = 0.0, val y: Double = 0.0) {
        object Left : Alignment(16.0, 16.0)
        object Centered : Alignment()
    }


    private fun Kid.pickName(index: Int, updateUiAction: () -> Unit) {
        changeName(index)
        playerName = Kid.names[index]
        if (index == 2) player.achievements.create(Character.Achievement.Ignorant)
        updateUiAction()
    }

    private fun updateUiAction(instructions: List<Text>, pickNameText: Text) {
        if (pickNameText.visible)
            pickNameText.visible = false
        if (!instructions.first().visible)
            instructions.first().visible = true
    }

}

private fun <T> List<T>.last(): T = this[this.size - 1]