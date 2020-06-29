package com.matolaygames.model

import com.soywiz.korge.view.Image
import com.soywiz.korge.view.Sprite
import kotlin.jvm.JvmName

abstract class Character {
    abstract var x: Double
    abstract val y: Double
    open lateinit var actions: List<Action>
    protected lateinit var name: Kid.Name
    val achievements = mutableListOf<Achievement>()

    sealed class Action {
        lateinit var image: Image

        sealed class Look : Action() {
            object Right : Action()
            object Left : Action()
        }

        sealed class Move : Action() {
            lateinit var sprite: Sprite

            object Forward : Move()
            object Backward : Move()
        }
    }

    sealed class Achievement() {
        object Ignorant : Achievement() {
            override var counter = 0
                set(value) {
                    field = value
                    isUnlocked = counter == 3
                }
        }

        protected open var counter = -1
            @get:JvmName("ac_ignorant_") get
        protected var isUnlocked = false

        protected fun MutableList<Achievement>.read(element: Achievement, actionOnExist: (Achievement) -> Unit = {}) =
                this.find { it == element }?.apply { actionOnExist(this) }

        protected fun Character.update(element: Achievement) = this.achievements.read(element) { ++it.counter }

        protected fun Character.reset(element: Achievement) = this.achievements.read(element) { it.counter = -1 }
    }

    fun whoami() = if (this::name.isInitialized) this.name.toString() else ""
}

fun MutableList<Character.Achievement>.create(
        element: Character.Achievement,
        actionOnSuccess: (Character.Achievement) -> Unit = {}
): List<Character.Achievement> {
    if (this.add(element))
        actionOnSuccess(element)
    return this.toList()
}