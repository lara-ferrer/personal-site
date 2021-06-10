import React from "react"
import Layout from "../layouts/Layout"
import Seo from "../components/Seo"
import MainTitle from "../components/MainTitle"
import { Container, Row, Col } from "react-bootstrap";

export default function politicaCookies() {
  return (
    <Layout>
      <Seo 
        title="Política de cookies"
        description="Lee más sobre la política de cookies del sitio web lara-ferrer.com."
      />
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <MainTitle name="Política de cookies" />
            </Col>
          </Row>

          <Row className="content">
            <Col lg={12} md={12} xs={12}>
              <p>Una <strong>cookie</strong> es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.</p>
              
              <p>El <strong>objetivo</strong> de la cookie es adaptar el contenido de la web a su perfil y necesidades, sin cookies los servicios ofrecidos por cualquier página se verían mermados notablemente. Si desea consultar más información sobre qué son las cookies, qué almacenan, cómo eliminarlas, desactivarlas, etc., le rogamos se dirija a este enlace.</p>

              <h2>Cookies utilizadas en este sitio web</h2>
              <p>Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a <strong>detallar el uso de cookies que hace esta web</strong> con el fin de informarle con la máxima exactitud posible.</p>

              <p>Este sitio web utiliza las siguientes cookies propias:</p>

              <ul>
                <li><strong>Cookies de sesión</strong>, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.</li>
              </ul>
              <p>Este sitio web utiliza las siguientes cookies de terceros:</p>

              <ul>
                <li><strong>Google Analytics:</strong> Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.</li>
                <li><strong>Redes sociales:</strong> Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.</li>
              </ul>

              <h2>Desactivación o eliminación de cookies</h2>
              <p>En cualquier momento podrá <strong>ejercer su derecho de desactivación o eliminación de cookies</strong> de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando.</p>

              <h2>Notas adicionales</h2>
              <p>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</p>
              <p>Los navegadores web son las <strong>herramientas encargadas de almacenar las cookies</strong> y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.</p>
              <p>En algunos casos <strong>es necesario instalar cookies</strong> para que el navegador no olvide su decisión de no aceptación de las mismas.</p>
              <p>En el caso de las cookies de <strong>Google Analytics</strong>, esta empresa almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda su dirección IP. Google Inc. es una compañía adherida al Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán tratados con un nivel de protección acorde a la normativa europea. Si desea información sobre el uso que Google da a las cookies le adjuntamos este otro enlace.</p>
              <p>Para cualquier duda o consulta acerca de esta política de cookies no dude en comunicarse conmigo a través del botón de contacto disponible en la <strong><a href="/">página principal</a></strong>.</p>
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}