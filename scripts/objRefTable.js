const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Plugins.video,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.ConsoleGroupEnd,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{keluar: 0},
	{Button2: 0},
	{Text: 0},
	{Audio: 0},
	{Browser: 0},
	{skor: 0},
	{Touch: 0},
	{Sprite4: 0},
	{Text2: 0},
	{VideoProfil: 0},
	{Sprite5: 0},
	{Mouse: 0},
	{Sprite6: 0},
	{Video: 0},
	{Skor: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	keluar: class extends self.IButtonInstance {},
	Button2: class extends self.IButtonInstance {},
	Text: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	skor: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	VideoProfil: class extends self.IWorldInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Video: class extends self.IWorldInstance {}
}