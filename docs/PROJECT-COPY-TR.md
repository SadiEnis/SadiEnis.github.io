# Proje metinleri — Türkçe

19 Ekim 2026 tarihinde GitHub main dalındaki Project First Run ve CleanOcean README dosyaları okundu. Proje sahipliği bilgisi ayrıca kullanıcının bu sohbette verdiği bilgilere dayanıyor. 3Match deposu herkese açık, ancak README uç noktası ve yaygın README dosya adları 404 döndü; bu proje için yalnızca kullanıcının verdiği prototip tanımı kullanıldı.

## Project First Run

Oyuncuların düşman dalgalarıyla savaştığı, deneyim puanı kazandığı ve silahlar, yetenekler ile sandık ödülleri üzerinden karakter yapılarını geliştirdiği birinci şahıs roguelite arena nişancı oyunu.

Oynanış sistemleri ve arayüzden entegrasyona kadar tüm geliştirmeyi üstleniyorum. Proje; modüler savaş, veriye dayalı içerik ve test edilebilir oynanış kurallarına odaklanıyor.

- Silah değiştirirken her silahın mermi durumu korunur. Eşya geliştirmeleri yeni bir yuva tüketmeden mevcut silah veya yeteneği güçlendirir.
- Düşman karşılaşmaları, deneyim puanı toplama ve sandık ödülü seçimi, savaşı ilerleme sistemine bağlar.

Durum: Geliştirme aşamasındaki prototip; görseller ve sunumda geçici içerikler kullanılıyor.

Teknik ayrıntılar: Uygun yerlerde oynanış kurallarını saf C# nesneleri yönetirken Unity bileşenleri girdi, sahne kurulumu, sunum ve yaşam döngüsü entegrasyonunu üstlenir. ScriptableObject içerik tanımları, değişken çalışma zamanı durumundan ayrılır. EditMode ve PlayMode testleri savaş, düşmanlar, ödüller, ilerleme ve arena geçişlerini kapsar.

## OceanClean

1–4 oyunculu, iki boyutlu çevrimiçi işbirlikçi bir oyun. Oyuncular kısa çok oyunculu oturumlarda okyanus atıklarını toplar, geri dönüşüm noktalarına teslim eder, puan ve oyun içi para kazanır.

Bitirme projem olarak geliştirdiğim bu çalışma; oynanış programlama, çevrimiçi çok oyunculu sistemler, oyuncu arayüzü ve API bağlantılı ilerlemeyi bir araya getirir.

- Oyuncular lobi oluşturur veya bir lobiye katılır, maçı oynar, sonuçları görür ve lobiye döner. Unity Lobby, Relay ve Netcode for GameObjects çok oyunculu akışı destekler.
- Harici REST API; hesapları, oyuncu profillerini, para birimini, liderlik tablosunu, envanteri, mağaza verilerini ve maç sonuçlarını bağlar.

Durum: Unity istemcisi oynanabilir. WebGL desteği test ediliyor; sunucu sahipliğinin devri lobi düzeyinde uygulanmış durumda.

Teknik ayrıntılar: Relay doğrudan IP bağlantısı gerektirmeden oyuncuları bağlar; WebGL için WebSocket uyumlu yapılandırma kullanılır. Lobi sahibi ayrılırsa yeni sahip Relay bağlantısını yeniden oluşturur ve lobi verilerini günceller. Mağaza ve envanter arayüz yapıları uygulanmıştır; genişletilmiş eşya sistemleri ve devam eden maçın bağlantı sorunlarından kurtarılması gelecekteki çalışmalardır. Çevre teması SKA 14 (Sudaki Yaşam), işbirlikçi yapı ise SKA 17 (Amaçlar İçin Ortaklıklar) ile ilişkilidir. Bu, resmi onay veya ödül iddiası değildir.

## 3Match

Match-3 türünü denemek amacıyla oluşturduğum kişisel bir prototip.

Durum: Prototip.

## Kaynaklar

- https://github.com/SadiEnis/project-first-run/blob/main/README.md
- https://github.com/SadiEnis/CleanOcean/blob/main/README.md
- https://github.com/SadiEnis/3Match — README içeriğine erişilemedi.
