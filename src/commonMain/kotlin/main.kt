
import com.matolaygames.common.GameState
import com.matolaygames.mylittleday.scene.IntroScene
import com.matolaygames.mylittleday.scene.MenuScene
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.Korge
import com.soywiz.korge.scene.Module
import com.soywiz.korge.scene.Scene
import com.soywiz.korim.color.Colors
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.SizeInt
import kotlin.reflect.KClass

suspend fun main() = Korge(config = Korge.Config(module = GameModule))
var state: GameState = GameState.Paused
object GameModule : Module() {
	override val mainScene: KClass<out Scene> = IntroScene::class

	override val title: String = "My Little Day"
//	override val size: SizeInt = SizeInt(800, 600)
	override val size: SizeInt = SizeInt(1240, 860)
//	override val size: SizeInt = SizeInt(1440, 900)
	override val bgcolor = Colors.BLACK
	override val icon = "icon.png"

	override suspend fun init(injector: AsyncInjector): Unit =
			injector.run {
				val wakeMeUp = resourcesVfs["music/8-bit-universe/wake_me_up.mp3"].readSound()
                mapPrototype { MenuScene() }
//				mapPrototype { IntroScene() }
				mapPrototype { IntroScene(wakeMeUp) }
			}
}