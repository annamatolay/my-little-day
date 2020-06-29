package com.matolaygames.model

import com.matolaygames.model.Character
import com.soywiz.klock.seconds
import com.soywiz.korev.Key
import com.matolaygames.util.get

class Boss : Character() {
    override var x = 255.0
    override val y = 390.0
    private val maxPosX = x + 660

    fun hide(exceptAction: Action? = null) =
            actions.forEach {
                if (it != exceptAction) {
                    if ((it as? Action.Look)?.image?.visible == true || (it as? Action.Move)?.sprite?.visible == true) {
                        when (it) {
                            is Action.Move -> it.sprite.visible = false
                            is Action.Look -> it.image.visible = false
                            else -> {
                            }
                        }

                    }
                }
            }

    fun look(direction: Key) =
            when (direction) {
                Key.LEFT -> {
                    actions[0].image.visible = true
                    (actions[1] as Action.Move).sprite.visible = false
                }
                Key.RIGHT -> {
                    actions[1].image.visible = true
                    (actions[0] as Action.Move).sprite.visible = false

                }
                else -> Unit
            }

    fun move(direction: Key) =
            when (direction) {
                Key.LEFT -> moveTo(direction)
                Key.RIGHT -> moveTo(direction)
                else -> Unit
            }

    private fun moveTo(direction: Key) {
        val isDirectionRight = direction == Key.RIGHT
        (actions[if (isDirectionRight) 3 else 2] as Action.Move).sprite.visible = false
        (actions[if (isDirectionRight) 2 else 3] as Action.Move).sprite.apply {
            playAnimation(spriteDisplayTime = 0.1.seconds)
            onAnimationStarted {
                visible = true
            }
            onAnimationStopped {
                setFrame(0)
            }
//            onAnimationCompleted {
//                setFrame(0)
//            }
            this.x = x
        }
    }
}


//                Character.Action.Move.Forward.apply {
//                    sprite = sprite(
//                            SpriteAnimation(resourcesVfs["character/forward_red.png"].readBitmap(), 40, 150, columns = 5)
//                    ) {
//                        position(player.x, player.y)
//                    }
//                },
//                Character.Action.Move.Backward.apply {
//                    sprite = sprite(
//                            SpriteAnimation(resourcesVfs["character/backward_red.png"].readBitmap(), 40, 150, columns = 5)
//                    ) {
//                        position(player.x, player.y)
//                        visible = false
//                    }
//                }TODO
