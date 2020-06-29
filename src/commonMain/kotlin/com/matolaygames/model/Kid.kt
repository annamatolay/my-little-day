package com.matolaygames.model

import com.soywiz.korev.Key

class Kid : Character() {
    companion object {
        val names = listOf(
                Name.Extrovert("Kiddo"),
                Name.Introvert("Nobody"),
                Name.Introvert("Anonymous")
        )
    }

    override var x = 255.0
    override val y = 390.0

    sealed class Name(val label: String) {
        class Extrovert(name: String) : Name(name)
        class Introvert(name: String) : Name(name)

        override fun toString() = label
    }

    fun changeName(index: Int) {
        println(names[index] ?: "NULL")
        this.name = names[index] }

    fun hide(exceptAction: Action? = null) =
            actions.forEach {
                if (it != exceptAction) {
                    if ((it as? Action.Look)?.image?.visible == true || (it as? Action.Move)?.sprite?.visible == true) {
                        when (it) {
                            is Action.Move -> it.sprite.visible = false
                            is Action.Look -> it.image.visible = false
                            else -> Unit
                        }

                    }
                }
            }

    fun look(direction: Key, action: () -> Unit) =
            when (direction) {
                Key.LEFT -> {
                    action()
                    actions[1].image.visible = false
                    actions[0].image.visible = true
                }
                Key.RIGHT -> {
                    action()
                    actions[0].image.visible = false
                    actions[1].image.visible = true
                }
                else -> Unit
            }
}
