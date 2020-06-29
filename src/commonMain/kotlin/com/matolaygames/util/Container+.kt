package com.matolaygames.util

import com.matolaygames.mylittleday.scene.MenuScene
import com.soywiz.korev.Key
import com.soywiz.korge.input.keys
import com.soywiz.korge.scene.SceneContainer
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.position
import com.soywiz.korge.view.text
import com.soywiz.korgw.GameWindow

fun Container.addFpsText(window: GameWindow) =
        text("FPS: 0") {
            position(10, 10)
            addFixedUpdater {
                text = "FPS: " + window.fps.toString()
            }
        }

fun SceneContainer.showMenuListener() =
        keys {
            onKeyDown {
                if (it.key == Key.ESCAPE)
                    this@showMenuListener.navigateToMenu()
            }
        }

fun SceneContainer.navigateToMenu() = this.changeToAsync<MenuScene>()