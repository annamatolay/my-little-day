(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge-root-korge', 'korio-root-korio', 'korau-root-korau', 'korgw-root-korgw', 'klock-root-klock', 'korim-root-korim', 'korinject-root-korinject', 'korma-root-korma'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge-root-korge'), require('korio-root-korio'), require('korau-root-korau'), require('korgw-root-korgw'), require('klock-root-klock'), require('korim-root-korim'), require('korinject-root-korinject'), require('korma-root-korma'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mylittleday'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'mylittleday'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'mylittleday'.");
    }if (typeof this['korau-root-korau'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korau-root-korau' was not found. Please, check whether 'korau-root-korau' is loaded prior to 'mylittleday'.");
    }if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'mylittleday'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'mylittleday'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'mylittleday'.");
    }if (typeof this['korinject-root-korinject'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korinject-root-korinject' was not found. Please, check whether 'korinject-root-korinject' is loaded prior to 'mylittleday'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'mylittleday'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'mylittleday'.");
    }root.mylittleday = factory(typeof mylittleday === 'undefined' ? {} : mylittleday, kotlin, this['korge-root-korge'], this['korio-root-korio'], this['korau-root-korau'], this['korgw-root-korgw'], this['klock-root-klock'], this['korim-root-korim'], this['korinject-root-korinject'], this['korma-root-korma']);
  }
}(this, function (_, Kotlin, $module$korge_root_korge, $module$korio_root_korio, $module$korau_root_korau, $module$korgw_root_korgw, $module$klock_root_klock, $module$korim_root_korim, $module$korinject_root_korinject, $module$korma_root_korma) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwUPAE = Kotlin.throwUPAE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Scene = $module$korge_root_korge.com.soywiz.korge.scene.Scene;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readSound = $module$korau_root_korau.com.soywiz.korau.sound.readSound_rbebel$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var Key = $module$korgw_root_korgw.com.soywiz.korev.Key;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var color = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var Fonts = $module$korge_root_korge.com.soywiz.korge.view.Fonts;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var Pair = Kotlin.kotlin.Pair;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Random = Kotlin.kotlin.random.Random;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var color_0 = $module$korim_root_korim.com.soywiz.korim.color;
  var position_0 = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var get_defaultUISkin = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUISkin_gohfi1$;
  var get_defaultUIFont = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUIFont_gohfi1$;
  var TextButton_init = $module$korge_root_korge.com.soywiz.korge.ui.TextButton;
  var CoroutineScope = $module$korge_root_korge.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.CoroutineScope_1fupul$;
  var wrapFunction = Kotlin.wrapFunction;
  var async = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.async_uddi5$;
  var TimeSpan_0 = $module$korge_root_korge.$$importsForInline$$['klock-root-klock'].com.soywiz.klock.TimeSpan;
  var get_timesPerSecond = $module$klock_root_klock.com.soywiz.klock.get_timesPerSecond_s8ev3n$;
  var addFixedUpdater = $module$korge_root_korge.com.soywiz.korge.view.addFixedUpdater_7q9vgb$;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var Korge$Config = $module$korge_root_korge.com.soywiz.korge.Korge.Config;
  var getKClass = Kotlin.getKClass;
  var Module = $module$korge_root_korge.com.soywiz.korge.scene.Module;
  var SizeInt = $module$korma_root_korma.com.soywiz.korma.geom.SizeInt;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  BaseScene.prototype = Object.create(Scene.prototype);
  BaseScene.prototype.constructor = BaseScene;
  GameState$Running.prototype = Object.create(GameState.prototype);
  GameState$Running.prototype.constructor = GameState$Running;
  GameState$Paused.prototype = Object.create(GameState.prototype);
  GameState$Paused.prototype.constructor = GameState$Paused;
  Boss.prototype = Object.create(Character.prototype);
  Boss.prototype.constructor = Boss;
  Character$Action$Look$Right.prototype = Object.create(Character$Action.prototype);
  Character$Action$Look$Right.prototype.constructor = Character$Action$Look$Right;
  Character$Action$Look$Left.prototype = Object.create(Character$Action.prototype);
  Character$Action$Look$Left.prototype.constructor = Character$Action$Look$Left;
  Character$Action$Look.prototype = Object.create(Character$Action.prototype);
  Character$Action$Look.prototype.constructor = Character$Action$Look;
  Character$Action$Move.prototype = Object.create(Character$Action.prototype);
  Character$Action$Move.prototype.constructor = Character$Action$Move;
  Character$Action$Move$Forward.prototype = Object.create(Character$Action$Move.prototype);
  Character$Action$Move$Forward.prototype.constructor = Character$Action$Move$Forward;
  Character$Action$Move$Backward.prototype = Object.create(Character$Action$Move.prototype);
  Character$Action$Move$Backward.prototype.constructor = Character$Action$Move$Backward;
  Character$Achievement$Ignorant.prototype = Object.create(Character$Achievement.prototype);
  Character$Achievement$Ignorant.prototype.constructor = Character$Achievement$Ignorant;
  Kid$Name$Extrovert.prototype = Object.create(Kid$Name.prototype);
  Kid$Name$Extrovert.prototype.constructor = Kid$Name$Extrovert;
  Kid$Name$Introvert.prototype = Object.create(Kid$Name.prototype);
  Kid$Name$Introvert.prototype.constructor = Kid$Name$Introvert;
  Kid.prototype = Object.create(Character.prototype);
  Kid.prototype.constructor = Kid;
  ChapterOneScene.prototype = Object.create(BaseScene.prototype);
  ChapterOneScene.prototype.constructor = ChapterOneScene;
  IntroScene$Alignment$Left.prototype = Object.create(IntroScene$Alignment.prototype);
  IntroScene$Alignment$Left.prototype.constructor = IntroScene$Alignment$Left;
  IntroScene$Alignment$Centered.prototype = Object.create(IntroScene$Alignment.prototype);
  IntroScene$Alignment$Centered.prototype.constructor = IntroScene$Alignment$Centered;
  IntroScene.prototype = Object.create(BaseScene.prototype);
  IntroScene.prototype.constructor = IntroScene;
  MenuScene.prototype = Object.create(BaseScene.prototype);
  MenuScene.prototype.constructor = MenuScene;
  GameModule.prototype = Object.create(Module.prototype);
  GameModule.prototype.constructor = GameModule;
  function BaseScene() {
    Scene.call(this);
    this.music_f6b1cm$_0 = null;
    this.shouldMusicChannelStop = false;
    this.channel_vr3i9k$_0 = this.channel_vr3i9k$_0;
    this.sounds_ck3gp7$_achyml$_0 = this.sounds_ck3gp7$_achyml$_0;
    this.musicSrcTemplates_hx8ae7$_totdqf$_0 = this.musicSrcTemplates_hx8ae7$_totdqf$_0;
  }
  Object.defineProperty(BaseScene.prototype, 'music', {
    get: function () {
      return this.music_f6b1cm$_0;
    }
  });
  Object.defineProperty(BaseScene.prototype, 'channel', {
    get: function () {
      if (this.channel_vr3i9k$_0 == null)
        return throwUPAE('channel');
      return this.channel_vr3i9k$_0;
    },
    set: function (channel) {
      this.channel_vr3i9k$_0 = channel;
    }
  });
  Object.defineProperty(BaseScene.prototype, 'sounds_ck3gp7$_0', {
    get: function () {
      if (this.sounds_ck3gp7$_achyml$_0 == null)
        return throwUPAE('sounds');
      return this.sounds_ck3gp7$_achyml$_0;
    },
    set: function (sounds) {
      this.sounds_ck3gp7$_achyml$_0 = sounds;
    }
  });
  Object.defineProperty(BaseScene.prototype, 'musicSrcTemplates_hx8ae7$_0', {
    get: function () {
      if (this.musicSrcTemplates_hx8ae7$_totdqf$_0 == null)
        return throwUPAE('musicSrcTemplates');
      return this.musicSrcTemplates_hx8ae7$_totdqf$_0;
    },
    set: function (musicSrcTemplates) {
      this.musicSrcTemplates_hx8ae7$_totdqf$_0 = musicSrcTemplates;
    }
  });
  function Coroutine$sceneAfterInit($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$sceneAfterInit.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneAfterInit.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneAfterInit.prototype.constructor = Coroutine$sceneAfterInit;
  Coroutine$sceneAfterInit.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneAfterInit.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.musicSrcTemplates_hx8ae7$_totdqf$_0 != null && this.$this.sounds_ck3gp7$_achyml$_0 == null) {
              this.local$tmp = ArrayList_init();
              if (this.local$tmp.isEmpty()) {
                this.local$tmp$ = this.$this.musicSrcTemplates_hx8ae7$_0.iterator();
                this.state_0 = 3;
                continue;
              } else {
                this.state_0 = 6;
                continue;
              }
            } else {
              this.state_0 = 7;
              continue;
            }

          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }
            var element = this.local$tmp$.next();
            this.state_0 = 4;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$(element), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp.add_11rb$(this.result_0);
            this.state_0 = 3;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.$this.sounds_ck3gp7$_0 = toList(this.local$tmp);
            if (this.$this.sounds_ck3gp7$_achyml$_0 != null)
              this.local$tmp.clear();
            println('BaseScene sceneAfterInit DONE');
            this.state_0 = 7;
            continue;
          case 7:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BaseScene.prototype.sceneAfterInit = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneAfterInit(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneBeforeLeaving($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneBeforeLeaving.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneBeforeLeaving.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneBeforeLeaving.prototype.constructor = Coroutine$sceneBeforeLeaving;
  Coroutine$sceneBeforeLeaving.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneBeforeLeaving.call(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.shouldMusicChannelStop || this.$this.channel_vr3i9k$_0 != null)
              this.$this.channel.stop();
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BaseScene.prototype.sceneBeforeLeaving = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneBeforeLeaving(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  BaseScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseScene',
    interfaces: [Scene]
  };
  function GameState() {
  }
  function GameState$Running(scene) {
    if (scene === void 0)
      scene = null;
    GameState.call(this);
  }
  GameState$Running.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Running',
    interfaces: [GameState]
  };
  function GameState$Paused() {
    GameState$Paused_instance = this;
    GameState.call(this);
  }
  GameState$Paused.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Paused',
    interfaces: [GameState]
  };
  var GameState$Paused_instance = null;
  function GameState$Paused_getInstance() {
    if (GameState$Paused_instance === null) {
      new GameState$Paused();
    }return GameState$Paused_instance;
  }
  GameState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameState',
    interfaces: []
  };
  function Boss() {
    Character.call(this);
    this.x_ctnwvr$_0 = 255.0;
    this.y_ctnwuw$_0 = 390.0;
    this.maxPosX_0 = this.x + 660;
  }
  Object.defineProperty(Boss.prototype, 'x', {
    get: function () {
      return this.x_ctnwvr$_0;
    },
    set: function (x) {
      this.x_ctnwvr$_0 = x;
    }
  });
  Object.defineProperty(Boss.prototype, 'y', {
    get: function () {
      return this.y_ctnwuw$_0;
    }
  });
  Boss.prototype.hide_sri4za$ = function (exceptAction) {
    if (exceptAction === void 0)
      exceptAction = null;
    var tmp$;
    tmp$ = this.actions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      if (!equals(element, exceptAction)) {
        if (((tmp$_2 = (tmp$_1 = Kotlin.isType(tmp$_0 = element, Character$Action$Look) ? tmp$_0 : null) != null ? tmp$_1.image : null) != null ? tmp$_2.visible : null) === true || ((tmp$_5 = (tmp$_4 = Kotlin.isType(tmp$_3 = element, Character$Action$Move) ? tmp$_3 : null) != null ? tmp$_4.sprite : null) != null ? tmp$_5.visible : null) === true) {
          if (Kotlin.isType(element, Character$Action$Move))
            element.sprite.visible = false;
          else if (Kotlin.isType(element, Character$Action$Look))
            element.image.visible = false;
        }}}
  };
  Boss.prototype.look_9s040q$ = function (direction) {
    var tmp$, tmp$_0;
    switch (direction.name) {
      case 'LEFT':
        this.actions.get_za3lpa$(0).image.visible = true;
        (Kotlin.isType(tmp$ = this.actions.get_za3lpa$(1), Character$Action$Move) ? tmp$ : throwCCE()).sprite.visible = false;
        break;
      case 'RIGHT':
        this.actions.get_za3lpa$(1).image.visible = true;
        (Kotlin.isType(tmp$_0 = this.actions.get_za3lpa$(0), Character$Action$Move) ? tmp$_0 : throwCCE()).sprite.visible = false;
        break;
      default:break;
    }
  };
  Boss.prototype.move_9s040q$ = function (direction) {
    switch (direction.name) {
      case 'LEFT':
        this.moveTo_0(direction);
        break;
      case 'RIGHT':
        this.moveTo_0(direction);
        break;
      default:break;
    }
  };
  function Boss$moveTo$lambda$lambda(this$) {
    return function (it) {
      this$.visible = true;
      return Unit;
    };
  }
  function Boss$moveTo$lambda$lambda_0(this$) {
    return function (it) {
      this$.setFrame_za3lpa$(0);
      return Unit;
    };
  }
  Boss.prototype.moveTo_0 = function (direction) {
    var tmp$, tmp$_0;
    var isDirectionRight = direction === Key.RIGHT;
    (Kotlin.isType(tmp$ = this.actions.get_za3lpa$(isDirectionRight ? 3 : 2), Character$Action$Move) ? tmp$ : throwCCE()).sprite.visible = false;
    var $receiver = (Kotlin.isType(tmp$_0 = this.actions.get_za3lpa$(isDirectionRight ? 2 : 3), Character$Action$Move) ? tmp$_0 : throwCCE()).sprite;
    $receiver.playAnimation_tsl5ct$(void 0, TimeSpan.Companion.fromSeconds_14dthe$(0.1));
    $receiver.onAnimationStarted.invoke_qlkmfe$(Boss$moveTo$lambda$lambda($receiver));
    $receiver.onAnimationStopped.invoke_qlkmfe$(Boss$moveTo$lambda$lambda_0($receiver));
    $receiver.x = $receiver.x;
  };
  Boss.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Boss',
    interfaces: [Character]
  };
  function Character() {
    this.actions_uncwv0$_0 = this.actions_uncwv0$_0;
    this.name_qzjnrk$_0 = this.name_qzjnrk$_0;
    this.achievements = ArrayList_init();
  }
  Object.defineProperty(Character.prototype, 'actions', {
    get: function () {
      if (this.actions_uncwv0$_0 == null)
        return throwUPAE('actions');
      return this.actions_uncwv0$_0;
    },
    set: function (actions) {
      this.actions_uncwv0$_0 = actions;
    }
  });
  Object.defineProperty(Character.prototype, 'name', {
    get: function () {
      if (this.name_qzjnrk$_0 == null)
        return throwUPAE('name');
      return this.name_qzjnrk$_0;
    },
    set: function (name) {
      this.name_qzjnrk$_0 = name;
    }
  });
  function Character$Action() {
    this.image_ve8d6g$_0 = this.image_ve8d6g$_0;
  }
  Object.defineProperty(Character$Action.prototype, 'image', {
    get: function () {
      if (this.image_ve8d6g$_0 == null)
        return throwUPAE('image');
      return this.image_ve8d6g$_0;
    },
    set: function (image) {
      this.image_ve8d6g$_0 = image;
    }
  });
  function Character$Action$Look() {
    Character$Action.call(this);
  }
  function Character$Action$Look$Right() {
    Character$Action$Look$Right_instance = this;
    Character$Action.call(this);
  }
  Character$Action$Look$Right.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Right',
    interfaces: [Character$Action]
  };
  var Character$Action$Look$Right_instance = null;
  function Character$Action$Look$Right_getInstance() {
    if (Character$Action$Look$Right_instance === null) {
      new Character$Action$Look$Right();
    }return Character$Action$Look$Right_instance;
  }
  function Character$Action$Look$Left() {
    Character$Action$Look$Left_instance = this;
    Character$Action.call(this);
  }
  Character$Action$Look$Left.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Left',
    interfaces: [Character$Action]
  };
  var Character$Action$Look$Left_instance = null;
  function Character$Action$Look$Left_getInstance() {
    if (Character$Action$Look$Left_instance === null) {
      new Character$Action$Look$Left();
    }return Character$Action$Look$Left_instance;
  }
  Character$Action$Look.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Look',
    interfaces: [Character$Action]
  };
  function Character$Action$Move() {
    Character$Action.call(this);
    this.sprite_2s2jf5$_0 = this.sprite_2s2jf5$_0;
  }
  Object.defineProperty(Character$Action$Move.prototype, 'sprite', {
    get: function () {
      if (this.sprite_2s2jf5$_0 == null)
        return throwUPAE('sprite');
      return this.sprite_2s2jf5$_0;
    },
    set: function (sprite) {
      this.sprite_2s2jf5$_0 = sprite;
    }
  });
  function Character$Action$Move$Forward() {
    Character$Action$Move$Forward_instance = this;
    Character$Action$Move.call(this);
  }
  Character$Action$Move$Forward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Forward',
    interfaces: [Character$Action$Move]
  };
  var Character$Action$Move$Forward_instance = null;
  function Character$Action$Move$Forward_getInstance() {
    if (Character$Action$Move$Forward_instance === null) {
      new Character$Action$Move$Forward();
    }return Character$Action$Move$Forward_instance;
  }
  function Character$Action$Move$Backward() {
    Character$Action$Move$Backward_instance = this;
    Character$Action$Move.call(this);
  }
  Character$Action$Move$Backward.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Backward',
    interfaces: [Character$Action$Move]
  };
  var Character$Action$Move$Backward_instance = null;
  function Character$Action$Move$Backward_getInstance() {
    if (Character$Action$Move$Backward_instance === null) {
      new Character$Action$Move$Backward();
    }return Character$Action$Move$Backward_instance;
  }
  Character$Action$Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: [Character$Action]
  };
  Character$Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  function Character$Achievement() {
    this.counter_19iev0$_0 = -1;
    this.isUnlocked = false;
  }
  function Character$Achievement$Ignorant() {
    Character$Achievement$Ignorant_instance = this;
    Character$Achievement.call(this);
    this.counter_h2lqt6$_0 = 0;
  }
  Object.defineProperty(Character$Achievement$Ignorant.prototype, 'counter', {
    get: function () {
      return this.counter_h2lqt6$_0;
    },
    set: function (value) {
      this.counter_h2lqt6$_0 = value;
      this.isUnlocked = this.counter === 3;
    }
  });
  Character$Achievement$Ignorant.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Ignorant',
    interfaces: [Character$Achievement]
  };
  var Character$Achievement$Ignorant_instance = null;
  function Character$Achievement$Ignorant_getInstance() {
    if (Character$Achievement$Ignorant_instance === null) {
      new Character$Achievement$Ignorant();
    }return Character$Achievement$Ignorant_instance;
  }
  Object.defineProperty(Character$Achievement.prototype, 'counter', {
    get: function () {
      return this.counter_19iev0$_0;
    },
    set: function (counter) {
      this.counter_19iev0$_0 = counter;
    }
  });
  function Character$Achievement$read$lambda(it) {
    return Unit;
  }
  Character$Achievement.prototype.read_izwy8m$ = function ($receiver, element, actionOnExist) {
    if (actionOnExist === void 0)
      actionOnExist = Character$Achievement$read$lambda;
    var tmp$;
    var tmp$_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (equals(element_0, element)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null) {
      actionOnExist(tmp$);
      tmp$_0 = tmp$;
    } else
      tmp$_0 = null;
    return tmp$_0;
  };
  function Character$Achievement$update$lambda(it) {
    it.counter = it.counter + 1 | 0;
    it.counter;
    return Unit;
  }
  Character$Achievement.prototype.update_u2uxcg$ = function ($receiver, element) {
    return this.read_izwy8m$($receiver.achievements, element, Character$Achievement$update$lambda);
  };
  function Character$Achievement$reset$lambda(it) {
    it.counter = -1;
    return Unit;
  }
  Character$Achievement.prototype.reset_u2uxcg$ = function ($receiver, element) {
    return this.read_izwy8m$($receiver.achievements, element, Character$Achievement$reset$lambda);
  };
  Character$Achievement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Achievement',
    interfaces: []
  };
  Character.prototype.whoami = function () {
    return this.name_qzjnrk$_0 != null ? this.name.toString() : '';
  };
  Character.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Character',
    interfaces: []
  };
  function create$lambda(it) {
    return Unit;
  }
  function create($receiver, element, actionOnSuccess) {
    if (actionOnSuccess === void 0)
      actionOnSuccess = create$lambda;
    if ($receiver.add_11rb$(element))
      actionOnSuccess(element);
    return toList($receiver);
  }
  function Kid() {
    Kid$Companion_getInstance();
    Character.call(this);
    this.x_f7ci84$_0 = 255.0;
    this.y_f7ci8z$_0 = 390.0;
  }
  function Kid$Companion() {
    Kid$Companion_instance = this;
    this.names = listOf([new Kid$Name$Extrovert('Kiddo'), new Kid$Name$Introvert('Nobody'), new Kid$Name$Introvert('Anonymous')]);
  }
  Kid$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Kid$Companion_instance = null;
  function Kid$Companion_getInstance() {
    if (Kid$Companion_instance === null) {
      new Kid$Companion();
    }return Kid$Companion_instance;
  }
  Object.defineProperty(Kid.prototype, 'x', {
    get: function () {
      return this.x_f7ci84$_0;
    },
    set: function (x) {
      this.x_f7ci84$_0 = x;
    }
  });
  Object.defineProperty(Kid.prototype, 'y', {
    get: function () {
      return this.y_f7ci8z$_0;
    }
  });
  function Kid$Name(label) {
    this.label = label;
  }
  function Kid$Name$Extrovert(name) {
    Kid$Name.call(this, name);
  }
  Kid$Name$Extrovert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Extrovert',
    interfaces: [Kid$Name]
  };
  function Kid$Name$Introvert(name) {
    Kid$Name.call(this, name);
  }
  Kid$Name$Introvert.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Introvert',
    interfaces: [Kid$Name]
  };
  Kid$Name.prototype.toString = function () {
    return this.label;
  };
  Kid$Name.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Name',
    interfaces: []
  };
  Kid.prototype.changeName_za3lpa$ = function (index) {
    var tmp$;
    println((tmp$ = Kid$Companion_getInstance().names.get_za3lpa$(index)) != null ? tmp$ : 'NULL');
    this.name = Kid$Companion_getInstance().names.get_za3lpa$(index);
  };
  Kid.prototype.hide_sri4za$ = function (exceptAction) {
    if (exceptAction === void 0)
      exceptAction = null;
    var tmp$;
    tmp$ = this.actions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      if (!equals(element, exceptAction)) {
        if (((tmp$_2 = (tmp$_1 = Kotlin.isType(tmp$_0 = element, Character$Action$Look) ? tmp$_0 : null) != null ? tmp$_1.image : null) != null ? tmp$_2.visible : null) === true || ((tmp$_5 = (tmp$_4 = Kotlin.isType(tmp$_3 = element, Character$Action$Move) ? tmp$_3 : null) != null ? tmp$_4.sprite : null) != null ? tmp$_5.visible : null) === true) {
          if (Kotlin.isType(element, Character$Action$Move))
            element.sprite.visible = false;
          else if (Kotlin.isType(element, Character$Action$Look))
            element.image.visible = false;
        }}}
  };
  Kid.prototype.look_r3ijsp$ = function (direction, action) {
    switch (direction.name) {
      case 'LEFT':
        action();
        this.actions.get_za3lpa$(1).image.visible = false;
        this.actions.get_za3lpa$(0).image.visible = true;
        break;
      case 'RIGHT':
        action();
        this.actions.get_za3lpa$(0).image.visible = false;
        this.actions.get_za3lpa$(1).image.visible = true;
        break;
      default:break;
    }
  };
  Kid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kid',
    interfaces: [Character]
  };
  function image$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function ChapterOneScene(music) {
    BaseScene.call(this);
    this.music_bl9bol$_0 = music;
    this.player_0 = new Kid();
  }
  Object.defineProperty(ChapterOneScene.prototype, 'music', {
    get: function () {
      return this.music_bl9bol$_0;
    }
  });
  function ChapterOneScene$sceneInit$lambda$lambda(this$ChapterOneScene) {
    return function ($receiver) {
      position($receiver, this$ChapterOneScene.player_0.x, this$ChapterOneScene.player_0.y);
      $receiver.visible = false;
      return Unit;
    };
  }
  function ChapterOneScene$sceneInit$lambda$lambda_0(this$ChapterOneScene) {
    return function ($receiver) {
      position($receiver, this$ChapterOneScene.player_0.x, this$ChapterOneScene.player_0.y);
      $receiver.visible = false;
      return Unit;
    };
  }
  function Coroutine$ChapterOneScene$sceneInit$lambda$lambda(closure$spaceCounter_0, closure$welcome_0, closure$instructions_0, this$ChapterOneScene_0, input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$spaceCounter = closure$spaceCounter_0;
    this.local$closure$welcome = closure$welcome_0;
    this.local$closure$instructions = closure$instructions_0;
    this.local$this$ChapterOneScene = this$ChapterOneScene_0;
    this.local$input = input_0;
  }
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$ChapterOneScene$sceneInit$lambda$lambda;
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$input.key === Key.SPACE) {
              this.local$closure$welcome.visible = this.local$closure$spaceCounter.v === -1;
              if (this.local$closure$spaceCounter.v > -1 && this.local$closure$spaceCounter.v < this.local$closure$instructions.size)
                this.local$closure$instructions.get_za3lpa$(this.local$closure$spaceCounter.v).visible = true;
              if (this.local$closure$spaceCounter.v > 0 && this.local$closure$spaceCounter.v < this.local$closure$instructions.size)
                this.local$closure$instructions.get_za3lpa$(this.local$closure$spaceCounter.v - 1 | 0).visible = false;
              if (this.local$closure$spaceCounter.v === this.local$closure$instructions.size)
                state = new GameState$Running(this.local$this$ChapterOneScene);
              return this.local$closure$spaceCounter.v = this.local$closure$spaceCounter.v + 1 | 0, Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ChapterOneScene$sceneInit$lambda$lambda_1(closure$spaceCounter_0, closure$welcome_0, closure$instructions_0, this$ChapterOneScene_0) {
    return function (input_0, continuation_0, suspended) {
      var instance = new Coroutine$ChapterOneScene$sceneInit$lambda$lambda(closure$spaceCounter_0, closure$welcome_0, closure$instructions_0, this$ChapterOneScene_0, input_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ChapterOneScene$sceneInit$lambda$lambda$lambda(closure$spaceCounter, closure$instructions) {
    return function () {
      var tmp$;
      if (closure$spaceCounter.v === (closure$instructions.size - 2 | 0)) {
        tmp$ = closure$spaceCounter.v;
        closure$spaceCounter.v = tmp$ + 1 | 0;
        closure$instructions.get_za3lpa$(closure$spaceCounter.v).visible = false;
        closure$instructions.get_za3lpa$(closure$spaceCounter.v).visible = true;
      }return Unit;
    };
  }
  function Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0(this$ChapterOneScene_0, closure$spaceCounter_0, closure$instructions_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ChapterOneScene = this$ChapterOneScene_0;
    this.local$closure$spaceCounter = closure$spaceCounter_0;
    this.local$closure$instructions = closure$instructions_0;
    this.local$it = it_0;
  }
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0.prototype.constructor = Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0;
  Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ChapterOneScene.player_0.look_r3ijsp$(this.local$it.key, ChapterOneScene$sceneInit$lambda$lambda$lambda(this.local$closure$spaceCounter, this.local$closure$instructions)), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ChapterOneScene$sceneInit$lambda$lambda_2(this$ChapterOneScene_0, closure$spaceCounter_0, closure$instructions_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ChapterOneScene$sceneInit$lambda$lambda_0(this$ChapterOneScene_0, closure$spaceCounter_0, closure$instructions_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$welcome = void 0;
    this.local$instructions = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_1 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$.prototype.constructor = Coroutine$sceneInit_st8p7j$;
  Coroutine$sceneInit_st8p7j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.music.playForever_fv8bff$();
            showMenuListener(this.$this.sceneContainer);
            var text = 'MY LITTLE DAY\n\n\n' + 'PRESS [SPACE] TO CONTINUE\n\n' + 'AND [ESC] FOR MENU\n\nVERSION: 0.0.1';
            var color_0;
            var font;
            color_0 = color.Colors.WHITE;
            font = Fonts.Companion.defaultFont;
            var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0, font), this.local$$receiver);
            text$lambda($receiver_0);
            this.local$welcome = position($receiver_0, 10.0, 10.0);
            var text_0 = 'YOU JUST HAVE TO PRESS [SPACE] A FEW MORE TIMES';
            var color_0_0;
            var font_0;
            color_0_0 = color.Colors.WHITE;
            font_0 = Fonts.Companion.defaultFont;
            var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text_0, 16.0, color_0_0, font_0), this.local$$receiver);
            position($receiver_0_0, 10.0, 10.0);
            $receiver_0_0.visible = false;
            var text_1 = 'IF YOU PRESS [SPACE]';
            var color_0_1;
            var font_1;
            color_0_1 = color.Colors.WHITE;
            font_1 = Fonts.Companion.defaultFont;
            var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(text_1, 16.0, color_0_1, font_1), this.local$$receiver);
            position($receiver_0_1, 10.0, 10.0);
            $receiver_0_1.visible = false;
            var text_2 = 'IN THE SAME TIME LIKE YOUR RHYTHM OF YOU HEART';
            var color_0_2;
            var font_2;
            color_0_2 = color.Colors.WHITE;
            font_2 = Fonts.Companion.defaultFont;
            var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$(text_2, 16.0, color_0_2, font_2), this.local$$receiver);
            position($receiver_0_2, 10.0, 10.0);
            $receiver_0_2.visible = false;
            var text_3 = "THEN I THINK IT'S MORE FUN";
            var color_0_3;
            var font_3;
            color_0_3 = color.Colors.WHITE;
            font_3 = Fonts.Companion.defaultFont;
            var $receiver_0_3 = addTo(Text.Companion.invoke_8ii8iq$(text_3, 16.0, color_0_3, font_3), this.local$$receiver);
            position($receiver_0_3, 10.0, 10.0);
            $receiver_0_3.visible = false;
            var text_4 = "YOU'RE DOING GOOD ANYWAYS";
            var color_0_4;
            var font_4;
            color_0_4 = color.Colors.WHITE;
            font_4 = Fonts.Companion.defaultFont;
            var $receiver_0_4 = addTo(Text.Companion.invoke_8ii8iq$(text_4, 16.0, color_0_4, font_4), this.local$$receiver);
            position($receiver_0_4, 10.0, 10.0);
            $receiver_0_4.visible = false;
            var text_5 = 'JUST A FEW MORE [SPACE]';
            var color_0_5;
            var font_5;
            color_0_5 = color.Colors.WHITE;
            font_5 = Fonts.Companion.defaultFont;
            var $receiver_0_5 = addTo(Text.Companion.invoke_8ii8iq$(text_5, 16.0, color_0_5, font_5), this.local$$receiver);
            position($receiver_0_5, 10.0, 10.0);
            $receiver_0_5.visible = false;
            var text_6 = "IS THAT FUNNY, ISN'T IT?\n\n\nIF YES, PLEASE PRESS [SPACE].\n\nIF NO, PLEASE PRESS [SPACE].";
            var color_0_6;
            var font_6;
            color_0_6 = color.Colors.WHITE;
            font_6 = Fonts.Companion.defaultFont;
            var $receiver_0_6 = addTo(Text.Companion.invoke_8ii8iq$(text_6, 16.0, color_0_6, font_6), this.local$$receiver);
            position($receiver_0_6, 10.0, 10.0);
            $receiver_0_6.visible = false;
            var text_7 = 'ONE MORE [SPACE] TO START THE GAME';
            var color_0_7;
            var font_7;
            color_0_7 = color.Colors.WHITE;
            font_7 = Fonts.Companion.defaultFont;
            var $receiver_0_7 = addTo(Text.Companion.invoke_8ii8iq$(text_7, 16.0, color_0_7, font_7), this.local$$receiver);
            position($receiver_0_7, 10.0, 10.0);
            $receiver_0_7.visible = false;
            var text_8 = 'YOU CAN TURN LEFT OR RIGHT WITH [ARROWS] AT THE MOMENT';
            var color_0_8;
            var font_8;
            color_0_8 = color.Colors.WHITE;
            font_8 = Fonts.Companion.defaultFont;
            var $receiver_0_8 = addTo(Text.Companion.invoke_8ii8iq$(text_8, 16.0, color_0_8, font_8), this.local$$receiver);
            position($receiver_0_8, 10.0, 10.0);
            $receiver_0_8.visible = false;
            var text_9 = 'PRESS [SPACE] TO WAKE UP';
            var color_0_9;
            var font_9;
            color_0_9 = color.Colors.WHITE;
            font_9 = Fonts.Companion.defaultFont;
            var $receiver_0_9 = addTo(Text.Companion.invoke_8ii8iq$(text_9, 16.0, color_0_9, font_9), this.local$$receiver);
            position($receiver_0_9, 10.0, 10.0);
            $receiver_0_9.visible = false;
            this.local$instructions = listOf([$receiver_0_0, $receiver_0_1, $receiver_0_2, $receiver_0_3, $receiver_0_4, $receiver_0_5, $receiver_0_6, $receiver_0_7, $receiver_0_8, $receiver_0_9]);
            this.local$tmp$ = this.$this.player_0;
            this.local$$receiver_0 = Character$Action$Look$Right_getInstance();
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/face/right_closed-eyes_blue_upscaled.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0_10 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            ChapterOneScene$sceneInit$lambda$lambda(this.$this)($receiver_0_10);
            this.local$$receiver_0.image = $receiver_0_10;
            this.local$$receiver_1 = Character$Action$Look$Left_getInstance();
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/face/left_closed-eyes_blue_upscaled.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver_0_11 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            ChapterOneScene$sceneInit$lambda$lambda_0(this.$this)($receiver_0_11);
            this.local$$receiver_1.image = $receiver_0_11;
            this.local$tmp$.actions = listOf([this.local$$receiver_0, this.local$$receiver_1]);
            var spaceCounter = {v: -1};
            var $receiver = get_keys(this.local$$receiver);
            $receiver.onKeyDown.invoke_25kf2w$(ChapterOneScene$sceneInit$lambda$lambda_1(spaceCounter, this.local$welcome, this.local$instructions, this.$this));
            if (Kotlin.isType(state, GameState$Running))
              $receiver.onKeyDown.invoke_25kf2w$(ChapterOneScene$sceneInit$lambda$lambda_2(this.$this, spaceCounter, this.local$instructions));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ChapterOneScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ChapterOneScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChapterOneScene',
    interfaces: [BaseScene]
  };
  function image$lambda_0($receiver) {
    return Unit;
  }
  function text$lambda_0($receiver) {
    return Unit;
  }
  function IntroScene(music) {
    BaseScene.call(this);
    this.music_1vqpqg$_0 = music;
    this.playerName_0 = new Kid$Name$Extrovert('');
    this.player_0 = new Kid();
  }
  Object.defineProperty(IntroScene.prototype, 'music', {
    get: function () {
      return this.music_1vqpqg$_0;
    }
  });
  function IntroScene$sceneInit$lambda$lambda(this$IntroScene) {
    return function ($receiver) {
      position($receiver, this$IntroScene.player_0.x, this$IntroScene.player_0.y);
      $receiver.visible = false;
      return Unit;
    };
  }
  function IntroScene$sceneInit$lambda$lambda_0(this$IntroScene) {
    return function ($receiver) {
      position($receiver, this$IntroScene.player_0.x, this$IntroScene.player_0.y);
      $receiver.visible = false;
      return Unit;
    };
  }
  function IntroScene$sceneInit$lambda$lambda$lambda$lambda(closure$spaceCounter, closure$instructions) {
    return function () {
      if (closure$spaceCounter.v === (closure$instructions.size - 2 | 0)) {
        closure$instructions.get_za3lpa$(closure$spaceCounter.v).visible = false;
        closure$instructions.get_za3lpa$(closure$spaceCounter.v).visible = true;
      }return Unit;
    };
  }
  function Coroutine$IntroScene$sceneInit$lambda$lambda$lambda(this$IntroScene_0, closure$spaceCounter_0, closure$instructions_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$IntroScene = this$IntroScene_0;
    this.local$closure$spaceCounter = closure$spaceCounter_0;
    this.local$closure$instructions = closure$instructions_0;
    this.local$it = it_0;
  }
  Coroutine$IntroScene$sceneInit$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$IntroScene$sceneInit$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$IntroScene$sceneInit$lambda$lambda$lambda.prototype.constructor = Coroutine$IntroScene$sceneInit$lambda$lambda$lambda;
  Coroutine$IntroScene$sceneInit$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$IntroScene.player_0.look_r3ijsp$(this.local$it.key, IntroScene$sceneInit$lambda$lambda$lambda$lambda(this.local$closure$spaceCounter, this.local$closure$instructions)), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function IntroScene$sceneInit$lambda$lambda$lambda(this$IntroScene_0, closure$spaceCounter_0, closure$instructions_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$IntroScene$sceneInit$lambda$lambda$lambda(this$IntroScene_0, closure$spaceCounter_0, closure$instructions_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function IntroScene$sceneInit$lambda$lambda$lambda_0(closure$instructions, closure$pickNameText, this$IntroScene) {
    return function () {
      this$IntroScene.updateUiAction_0(closure$instructions, closure$pickNameText);
      return Unit;
    };
  }
  function IntroScene$sceneInit$lambda$lambda$lambda_1(closure$instructions, closure$pickNameText, this$IntroScene) {
    return function () {
      this$IntroScene.updateUiAction_0(closure$instructions, closure$pickNameText);
      return Unit;
    };
  }
  function IntroScene$sceneInit$lambda$lambda$lambda_2(closure$instructions, closure$pickNameText, this$IntroScene) {
    return function () {
      this$IntroScene.updateUiAction_0(closure$instructions, closure$pickNameText);
      return Unit;
    };
  }
  function Coroutine$IntroScene$sceneInit$lambda$lambda(this$_0, this$IntroScene_0, closure$spaceCounter_0, closure$instructions_0, closure$welcome_0, closure$pickNameText_0, this$sceneInit_0, closure$lookAroundInstruction_0, closure$startCinematicInstruction_0, input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$IntroScene = this$IntroScene_0;
    this.local$closure$spaceCounter = closure$spaceCounter_0;
    this.local$closure$instructions = closure$instructions_0;
    this.local$closure$welcome = closure$welcome_0;
    this.local$closure$pickNameText = closure$pickNameText_0;
    this.local$this$sceneInit = this$sceneInit_0;
    this.local$closure$lookAroundInstruction = closure$lookAroundInstruction_0;
    this.local$closure$startCinematicInstruction = closure$startCinematicInstruction_0;
    this.local$input = input_0;
  }
  Coroutine$IntroScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$IntroScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$IntroScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$IntroScene$sceneInit$lambda$lambda;
  Coroutine$IntroScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(state, GameState$Running)) {
              this.local$this$.onKeyDown.invoke_25kf2w$(IntroScene$sceneInit$lambda$lambda$lambda(this.local$this$IntroScene, this.local$closure$spaceCounter, this.local$closure$instructions));
            }
            if (this.local$closure$welcome.visible && this.local$input.key === Key.SPACE) {
              this.local$closure$welcome.visible = false;
              return this.local$closure$pickNameText.visible = true, Unit;
            } else if (this.local$closure$pickNameText.visible) {
              switch (this.local$input.key.name) {
                case 'K':
                  return this.local$this$IntroScene.pickName_0(this.local$this$IntroScene.player_0, 0, IntroScene$sceneInit$lambda$lambda$lambda_0(this.local$closure$instructions, this.local$closure$pickNameText, this.local$this$IntroScene)), Unit;
                case 'N':
                  return this.local$this$IntroScene.pickName_0(this.local$this$IntroScene.player_0, 1, IntroScene$sceneInit$lambda$lambda$lambda_1(this.local$closure$instructions, this.local$closure$pickNameText, this.local$this$IntroScene)), Unit;
                case 'R':
                  return this.local$this$IntroScene.pickName_0(this.local$this$IntroScene.player_0, Random.Default.nextInt_za3lpa$(3), IntroScene$sceneInit$lambda$lambda$lambda_2(this.local$closure$instructions, this.local$closure$pickNameText, this.local$this$IntroScene)), Unit;
                default:return Unit;
              }
            } else {
              if (this.local$closure$spaceCounter.v === -1)
                this.local$closure$spaceCounter.v = 0;
              if (equals(this.local$input.key, Key.SPACE)) {
                this.local$closure$spaceCounter.v = this.local$closure$spaceCounter.v + 1 | 0;
                if (this.local$closure$spaceCounter.v === 1) {
                  first(this.local$closure$instructions).visible = false;
                  return this.local$closure$instructions.set_wxm5ur$(1, this.local$this$IntroScene.createText_0(this.local$this$sceneInit, 'SO, YOU ARE ' + '"' + this.local$this$IntroScene.playerName_0 + '"' + ' RIGHT NOW.' + '\n' + '\n' + 'THIS IS _YOUR_ NAME.' + '\n' + '\n' + 'I SEE...')), Unit;
                } else if (this.local$closure$spaceCounter.v === this.local$closure$instructions.size) {
                  state = new GameState$Running(this.local$this$IntroScene);
                  this.local$this$IntroScene.player_0.actions.get_za3lpa$(0).image.visible = true;
                  last(this.local$closure$instructions).visible = false;
                  return this.local$closure$lookAroundInstruction.visible = true, Unit;
                } else if (this.local$closure$lookAroundInstruction.visible) {
                  this.local$closure$lookAroundInstruction.visible = false;
                  return this.local$closure$startCinematicInstruction.visible = true, Unit;
                } else if (this.local$closure$spaceCounter.v > this.local$closure$instructions.size) {
                  return Unit;
                } else if (this.local$closure$startCinematicInstruction.visible) {
                  return Unit;
                } else {
                  if (this.local$closure$spaceCounter.v > -1 && this.local$closure$spaceCounter.v < this.local$closure$instructions.size)
                    this.local$closure$instructions.get_za3lpa$(this.local$closure$spaceCounter.v).visible = true;
                  if (this.local$closure$spaceCounter.v > 0 && this.local$closure$spaceCounter.v < this.local$closure$instructions.size)
                    return this.local$closure$instructions.get_za3lpa$(this.local$closure$spaceCounter.v - 1 | 0).visible = false, Unit;
                }
              } else
                return Unit;
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function IntroScene$sceneInit$lambda$lambda_1(this$_0, this$IntroScene_0, closure$spaceCounter_0, closure$instructions_0, closure$welcome_0, closure$pickNameText_0, this$sceneInit_0, closure$lookAroundInstruction_0, closure$startCinematicInstruction_0) {
    return function (input_0, continuation_0, suspended) {
      var instance = new Coroutine$IntroScene$sceneInit$lambda$lambda(this$_0, this$IntroScene_0, closure$spaceCounter_0, closure$instructions_0, closure$welcome_0, closure$pickNameText_0, this$sceneInit_0, closure$lookAroundInstruction_0, closure$startCinematicInstruction_0, input_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$_0($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$welcome = void 0;
    this.local$pickNameText = void 0;
    this.local$lookAroundInstruction = void 0;
    this.local$startCinematicInstruction = void 0;
    this.local$instructions = void 0;
    this.local$tmp$ = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_1 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_0.prototype.constructor = Coroutine$sceneInit_st8p7j$_0;
  Coroutine$sceneInit_st8p7j$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
            this.$this.channel = this.$this.music.playForever_fv8bff$();
            showMenuListener(this.$this.sceneContainer);
            var whoami = this.$this.player_0.whoami();
            tmp$ = new Pair(10.0, 10.0);
            this.local$welcome = this.$this.createText_0(this.local$$receiver, 'MY LITTLE DAY\n\n\n' + 'PRESS [SPACE] TO CONTINUE\n\n' + 'AND [ESC] FOR MENU\n\nVERSION: 0.0.1', true, IntroScene$Alignment$Left_getInstance(), tmp$);
            this.local$pickNameText = this.$this.createText_0(this.local$$receiver, "WHO ARE YOU\n\n\n[K]: JUST A KID\n\n[N]: NOBODY\n\n[R] I DON'T CARE");
            this.local$lookAroundInstruction = this.$this.createText_0(this.local$$receiver, 'YOU CAN TURN LEFT OR RIGHT WITH [ARROWS] AT THE MOMENT', void 0, IntroScene$Alignment$Left_getInstance());
            tmp$_0 = new Pair(32.0, 32.0);
            this.local$startCinematicInstruction = this.$this.createText_0(this.local$$receiver, 'PRESS [SPACE] TO WAKE UP...', void 0, IntroScene$Alignment$Left_getInstance(), tmp$_0);
            tmp$_1 = new Pair(this.local$$receiver.x - 12.0, this.local$$receiver.y - 6.0);
            tmp$_2 = this.$this.createText_0(this.local$$receiver, 'YOU JUST HAVE TO PRESS [SPACE]\n\n ' + 'A FEW MORE TIMES TO FINISH WITH CHARACTER CREATION', void 0, IntroScene$Alignment$Left_getInstance(), tmp$_1);
            tmp$_3 = this.$this.createText_0(this.local$$receiver, 'TEMPLATE');
            tmp$_4 = this.$this.playerName_0;
            if (equals(tmp$_4, Kid$Companion_getInstance().names.get_za3lpa$(0)))
              tmp$_5 = "I HOPE YOU READY\n\nLET'S SEE WHAT THE FUTURE HOLD FOR YOU!";
            else if (equals(tmp$_4, Kid$Companion_getInstance().names.get_za3lpa$(1)))
              tmp$_5 = 'YOU KNOW YOU COULD BE A BIT MORE OPTIMISTIC.\n\n' + "PERHAPS, I'LL BE SOMEONE AFTER ALL.";
            else if (equals(tmp$_4, Kid$Companion_getInstance().names.get_za3lpa$(2)))
              tmp$_5 = '...';
            else
              tmp$_5 = "I WASN'T PREPARED FOR THIS :O";
            this.local$instructions = mutableListOf([tmp$_2, tmp$_3, this.$this.createText_0(this.local$$receiver, tmp$_5), this.$this.createText_0(this.local$$receiver, 'ANYWAYS, IF YOU PRESS [SPACE]', void 0, IntroScene$Alignment$Left_getInstance()), this.$this.createText_0(this.local$$receiver, 'IN THE SAME TIME LIKE YOUR RHYTHM OF YOU HEART', void 0, IntroScene$Alignment$Left_getInstance(), new Pair(48.0, 48.0)), this.$this.createText_0(this.local$$receiver, 'OR FOLLOW THE RHYTHM OF THIS COOL SONG'), this.$this.createText_0(this.local$$receiver, "THEN I THINK IT'S MORE FUN", void 0, IntroScene$Alignment$Left_getInstance(), new Pair(24.0, 14.0)), this.$this.createText_0(this.local$$receiver, "YOU'RE DOING GOOD, BY THE WAY"), this.$this.createText_0(this.local$$receiver, 'JUST A FEW MORE [SPACE] LEFT'), this.$this.createText_0(this.local$$receiver, 'ONE MORE [SPACE] TO START THE GAME'), this.$this.createText_0(this.local$$receiver, "IS THAT FUNNY, ISN'T IT?\n\n\n" + 'IF YES, PLEASE PRESS [SPACE]\n\n' + 'IF NO, PLEASE PRESS [SPACE]')]);
            this.local$tmp$ = this.$this.player_0;
            this.local$$receiver_0 = Character$Action$Look$Left_getInstance();
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/face/left_closed-eyes_blue_upscaled.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            IntroScene$sceneInit$lambda$lambda(this.$this)($receiver_0);
            this.local$$receiver_0.image = $receiver_0;
            this.local$$receiver_1 = Character$Action$Look$Right_getInstance();
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('character/face/right_closed-eyes_blue_upscaled.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $receiver_0_0 = addTo(Image_init(this.result_0, 0.0, 0.0), this.local$$receiver);
            IntroScene$sceneInit$lambda$lambda_0(this.$this)($receiver_0_0);
            this.local$$receiver_1.image = $receiver_0_0;
            this.local$tmp$.actions = listOf([this.local$$receiver_0, this.local$$receiver_1]);
            var spaceCounter = {v: -1};
            var $receiver = get_keys(this.local$$receiver);
            $receiver.onKeyDown.invoke_25kf2w$(IntroScene$sceneInit$lambda$lambda_1($receiver, this.$this, spaceCounter, this.local$instructions, this.local$welcome, this.local$pickNameText, this.local$$receiver, this.local$lookAroundInstruction, this.local$startCinematicInstruction));
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  IntroScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_0(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  IntroScene.prototype.createText_0 = function ($receiver, text, isVisible, alignment, position_0) {
    if (isVisible === void 0)
      isVisible = false;
    if (alignment === void 0)
      alignment = IntroScene$Alignment$Centered_getInstance();
    if (position_0 === void 0)
      position_0 = null;
    var color_0;
    var font;
    color_0 = color.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0, font), $receiver);
    var defaultPos = new Pair(this.views.actualVirtualWidth / 2.0, this.views.actualVirtualHeight / 2.0);
    var tmp$ = position_0 != null ? position_0 : defaultPos;
    var actualX = tmp$.component1()
    , actualY = tmp$.component2();
    position($receiver_0, actualX, actualY);
    this.align_vcxng1$($receiver_0, alignment);
    $receiver_0.visible = isVisible;
    return $receiver_0;
  };
  IntroScene.prototype.align_vcxng1$ = function ($receiver, alignment) {
    if (Kotlin.isType(alignment, IntroScene$Alignment$Centered))
      position($receiver, $receiver.x - $receiver.width / 2, $receiver.y - $receiver.height / 2);
    else
      position($receiver, $receiver.x + alignment.x, $receiver.y + alignment.y);
  };
  function IntroScene$Alignment(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  function IntroScene$Alignment$Left() {
    IntroScene$Alignment$Left_instance = this;
    IntroScene$Alignment.call(this, 16.0, 16.0);
  }
  IntroScene$Alignment$Left.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Left',
    interfaces: [IntroScene$Alignment]
  };
  var IntroScene$Alignment$Left_instance = null;
  function IntroScene$Alignment$Left_getInstance() {
    if (IntroScene$Alignment$Left_instance === null) {
      new IntroScene$Alignment$Left();
    }return IntroScene$Alignment$Left_instance;
  }
  function IntroScene$Alignment$Centered() {
    IntroScene$Alignment$Centered_instance = this;
    IntroScene$Alignment.call(this);
  }
  IntroScene$Alignment$Centered.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Centered',
    interfaces: [IntroScene$Alignment]
  };
  var IntroScene$Alignment$Centered_instance = null;
  function IntroScene$Alignment$Centered_getInstance() {
    if (IntroScene$Alignment$Centered_instance === null) {
      new IntroScene$Alignment$Centered();
    }return IntroScene$Alignment$Centered_instance;
  }
  IntroScene$Alignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alignment',
    interfaces: []
  };
  IntroScene.prototype.pickName_0 = function ($receiver, index, updateUiAction) {
    $receiver.changeName_za3lpa$(index);
    this.playerName_0 = Kid$Companion_getInstance().names.get_za3lpa$(index);
    if (index === 2)
      create(this.player_0.achievements, Character$Achievement$Ignorant_getInstance());
    updateUiAction();
  };
  IntroScene.prototype.updateUiAction_0 = function (instructions, pickNameText) {
    if (pickNameText.visible)
      pickNameText.visible = false;
    if (!first(instructions).visible)
      first(instructions).visible = true;
  };
  IntroScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntroScene',
    interfaces: [BaseScene]
  };
  function last($receiver) {
    return $receiver.get_za3lpa$($receiver.size - 1 | 0);
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function textButton$lambda($receiver) {
    return Unit;
  }
  function MenuScene() {
    BaseScene.call(this);
  }
  function Coroutine$MenuScene$sceneInit$lambda$lambda(this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$MenuScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MenuScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MenuScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$MenuScene$sceneInit$lambda$lambda;
  Coroutine$MenuScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$.text = 'ERR :(', Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MenuScene$sceneInit$lambda$lambda(this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MenuScene$sceneInit$lambda$lambda(this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MenuScene$sceneInit$lambda$lambda_0(this$MenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MenuScene = this$MenuScene_0;
  }
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.prototype.constructor = Coroutine$MenuScene$sceneInit$lambda$lambda_0;
  Coroutine$MenuScene$sceneInit$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$MenuScene.shouldMusicChannelStop = true;
            return this.local$this$MenuScene.views.gameWindow.close(), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MenuScene$sceneInit$lambda$lambda_0(this$MenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MenuScene$sceneInit$lambda$lambda_0(this$MenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MenuScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
    var $receiver_0_0 = addTo(new TextButton_init(256.0, 32.0, color_0.Colors.BLACK.hexString, get_defaultUISkin($receiver), get_defaultUIFont($receiver)), $receiver);
    $receiver_0_0.text = 'RESTART';
    position_0($receiver_0_0, (this.views.actualVirtualWidth / 2 | 0) - 128 | 0, (this.views.actualVirtualHeight / 2 | 0) - 192 | 0);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = $receiver_0_0 != null ? get_mouse($receiver_0_0) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, MenuScene$sceneInit$lambda$lambda($receiver_0_0)));
    }var $receiver_0_1 = addTo(new TextButton_init(256.0, 32.0, color_0.Colors.BLACK.hexString, get_defaultUISkin($receiver), get_defaultUIFont($receiver)), $receiver);
    $receiver_0_1.text = 'EXIT';
    position_0($receiver_0_1, (this.views.actualVirtualWidth / 2 | 0) - 128 | 0, (this.views.actualVirtualHeight / 2 | 0) - 64 | 0);
    var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$_0;
    if ((tmp$_0 = $receiver_0_1 != null ? get_mouse($receiver_0_1) : null) != null) {
      prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_0, MenuScene$sceneInit$lambda$lambda_0(this)));
    }};
  MenuScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuScene',
    interfaces: [BaseScene]
  };
  function text$lambda_1($receiver) {
    return Unit;
  }
  var SceneContainer$changeToAsync$lambda = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    function Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$injects = closure$injects_0;
      this.local$closure$time = closure$time_0;
      this.local$closure$transition = closure$transition_0;
      this.local$typeClosure$T = typeClosure$T_0;
      this.local$this$SceneContainer = this$SceneContainer_0;
    }
    Coroutine$SceneContainer$changeToAsync$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$SceneContainer$changeToAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.constructor = Coroutine$SceneContainer$changeToAsync$lambda;
    Coroutine$SceneContainer$changeToAsync$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var $this = this.local$this$SceneContainer;
              var T_0 = this.local$typeClosure$T;
              var injects = this.local$closure$injects.slice();
              var time = this.local$closure$time;
              var transition = this.local$closure$transition;
              this.state_0 = 2;
              this.result_0 = $this.changeTo_oszfv1$(getKClass(T_0), injects.slice(), time, transition, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              return this.result_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        } catch (e) {
          if (this.state_0 === 1) {
            this.exceptionState_0 = this.state_0;
            throw e;
          } else {
            this.state_0 = this.exceptionState_0;
            this.exception_0 = e;
          }
        }
       while (true);
    };
    return function (closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$SceneContainer$changeToAsync$lambda(closure$injects_0, closure$time_0, closure$transition_0, typeClosure$T_0, isT_0, this$SceneContainer_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function addFpsText$lambda$lambda(closure$window) {
    return function ($receiver) {
      $receiver.text = 'FPS: ' + closure$window.fps.toString();
      return Unit;
    };
  }
  function addFpsText($receiver, window_0) {
    var color_0;
    var font;
    color_0 = color.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$('FPS: 0', 16.0, color_0, font), $receiver);
    position_0($receiver_0, 10, 10);
    addFixedUpdater_0($receiver_0, addFpsText$lambda$lambda(window_0));
    return $receiver_0;
  }
  function Coroutine$showMenuListener$lambda$lambda(this$showMenuListener_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$showMenuListener = this$showMenuListener_0;
    this.local$it = it_0;
  }
  Coroutine$showMenuListener$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showMenuListener$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showMenuListener$lambda$lambda.prototype.constructor = Coroutine$showMenuListener$lambda$lambda;
  Coroutine$showMenuListener$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$it.key === Key.ESCAPE)
              return navigateToMenu(this.local$this$showMenuListener), Unit;
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function showMenuListener$lambda$lambda(this$showMenuListener_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$showMenuListener$lambda$lambda(this$showMenuListener_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function showMenuListener($receiver) {
    return get_keys($receiver).onKeyDown.invoke_25kf2w$(showMenuListener$lambda$lambda($receiver));
  }
  function navigateToMenu($receiver) {
    var injects = [];
    var time;
    var transition;
    if (time === void 0) {
      time = TimeSpan_0.Companion.fromSeconds_14dthe$(0);
    }if (transition === void 0)
      transition = $receiver.defaultTransition;
    return async(CoroutineScope($receiver.coroutineContext), SceneContainer$changeToAsync$lambda(injects, time, transition, MenuScene, Kotlin.isInstanceOf(MenuScene), $receiver));
  }
  function get_0($receiver, action) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      equals(element, action);
    }
    return null;
  }
  function get_1($receiver, action) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1;
      equals((tmp$_1 = Kotlin.isType(tmp$_0 = element, Character$Action$Move) ? tmp$_0 : null) != null ? tmp$_1.sprite : null, action.sprite);
    }
    return null;
  }
  function addFixedUpdater_0($receiver, updatable) {
    return addFixedUpdater($receiver, get_timesPerSecond(60), void 0, void 0, updatable);
  }
  function main(continuation) {
    return korge.Korge.invoke_dnucxw$(new Korge$Config(GameModule_getInstance()), continuation);
  }
  var state;
  function GameModule() {
    GameModule_instance = this;
    Module.call(this);
    this.mainScene_kxtxcn$_0 = getKClass(IntroScene);
    this.title_4t7dce$_0 = 'My Little Day';
    this.size_2gmd87$_0 = SizeInt.Companion.invoke_vux9f0$(1240, 860);
    this.bgcolor_5hh4zw$_0 = color_0.Colors.BLACK;
    this.icon_2m8d0v$_0 = 'icon.png';
  }
  Object.defineProperty(GameModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_kxtxcn$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'title', {
    get: function () {
      return this.title_4t7dce$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'size', {
    get: function () {
      return this.size_2gmd87$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'bgcolor', {
    get: function () {
      return this.bgcolor_5hh4zw$_0;
    }
  });
  Object.defineProperty(GameModule.prototype, 'icon', {
    get: function () {
      return this.icon_2m8d0v$_0;
    }
  });
  function Coroutine$GameModule$init$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$GameModule$init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$init$lambda$lambda.prototype.constructor = Coroutine$GameModule$init$lambda$lambda;
  Coroutine$GameModule$init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new MenuScene();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$init$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GameModule$init$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$GameModule$init$lambda$lambda_0(closure$wakeMeUp_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$wakeMeUp = closure$wakeMeUp_0;
  }
  Coroutine$GameModule$init$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$init$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$init$lambda$lambda_0.prototype.constructor = Coroutine$GameModule$init$lambda$lambda_0;
  Coroutine$GameModule$init$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new IntroScene(this.local$closure$wakeMeUp);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$init$lambda$lambda_0(closure$wakeMeUp_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GameModule$init$lambda$lambda_0(closure$wakeMeUp_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$init_y6n311$($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$init_y6n311$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_y6n311$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_y6n311$.prototype.constructor = Coroutine$init_y6n311$;
  Coroutine$init_y6n311$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('music/8-bit-universe/wake_me_up.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var wakeMeUp = this.result_0;
            this.local$injector.mapPrototype_siz2e9$(getKClass(MenuScene), GameModule$init$lambda$lambda);
            this.local$injector.mapPrototype_siz2e9$(getKClass(IntroScene), GameModule$init$lambda$lambda_0(wakeMeUp));
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GameModule.prototype.init_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$init_y6n311$(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GameModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameModule',
    interfaces: [Module]
  };
  var GameModule_instance = null;
  function GameModule_getInstance() {
    if (GameModule_instance === null) {
      new GameModule();
    }return GameModule_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$matolaygames = package$com.matolaygames || (package$com.matolaygames = {});
  var package$common = package$matolaygames.common || (package$matolaygames.common = {});
  package$common.BaseScene = BaseScene;
  GameState.Running = GameState$Running;
  Object.defineProperty(GameState, 'Paused', {
    get: GameState$Paused_getInstance
  });
  package$common.GameState = GameState;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  var package$model = package$matolaygames.model || (package$matolaygames.model = {});
  package$model.Boss = Boss;
  Object.defineProperty(Character$Action$Look, 'Right', {
    get: Character$Action$Look$Right_getInstance
  });
  Object.defineProperty(Character$Action$Look, 'Left', {
    get: Character$Action$Look$Left_getInstance
  });
  Character$Action.Look = Character$Action$Look;
  Object.defineProperty(Character$Action$Move, 'Forward', {
    get: Character$Action$Move$Forward_getInstance
  });
  Object.defineProperty(Character$Action$Move, 'Backward', {
    get: Character$Action$Move$Backward_getInstance
  });
  Character$Action.Move = Character$Action$Move;
  Character.Action = Character$Action;
  Object.defineProperty(Character$Achievement, 'Ignorant', {
    get: Character$Achievement$Ignorant_getInstance
  });
  Character.Achievement = Character$Achievement;
  package$model.Character = Character;
  package$model.create_izwy8m$ = create;
  Object.defineProperty(Kid, 'Companion', {
    get: Kid$Companion_getInstance
  });
  Kid$Name.Extrovert = Kid$Name$Extrovert;
  Kid$Name.Introvert = Kid$Name$Introvert;
  Kid.Name = Kid$Name;
  package$model.Kid = Kid;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  var package$mylittleday = package$matolaygames.mylittleday || (package$matolaygames.mylittleday = {});
  var package$scene = package$mylittleday.scene || (package$mylittleday.scene = {});
  package$scene.ChapterOneScene = ChapterOneScene;
  Object.defineProperty(IntroScene$Alignment, 'Left', {
    get: IntroScene$Alignment$Left_getInstance
  });
  Object.defineProperty(IntroScene$Alignment, 'Centered', {
    get: IntroScene$Alignment$Centered_getInstance
  });
  IntroScene.Alignment = IntroScene$Alignment;
  package$scene.IntroScene = IntroScene;
  package$scene.MenuScene = MenuScene;
  var package$util = package$matolaygames.util || (package$matolaygames.util = {});
  package$util.addFpsText_bvte2f$ = addFpsText;
  package$util.showMenuListener_j302ww$ = showMenuListener;
  package$util.navigateToMenu_j302ww$ = navigateToMenu;
  package$util.get_uv5gzp$ = get_0;
  package$util.get_dc8syw$ = get_1;
  package$util.addFixedUpdater_mbuwh6$ = addFixedUpdater_0;
  _.main = main;
  Object.defineProperty(_, 'state', {
    get: function () {
      return state;
    },
    set: function (value) {
      state = value;
    }
  });
  $$importsForInline$$['korinject-root-korinject'] = $module$korinject_root_korinject;
  Object.defineProperty(_, 'GameModule', {
    get: GameModule_getInstance
  });
  state = GameState$Paused_getInstance();
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('mylittleday', _);
  return _;
}));

//# sourceMappingURL=mylittleday.js.map
