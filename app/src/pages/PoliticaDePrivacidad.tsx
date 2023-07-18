import Head from 'next/head'
import Image from 'next/image'

export default PoliticaDePrivacidad

function PoliticaDePrivacidad () {
  return(<>
    <Head>
      <title>Política de privacidad y aviso legal</title>
    </Head>
    <div className="bg-slate-300 p-12">
      <main className="w-1/2 bg-white mx-auto my-4 shadow-xl p-12 text-justify">
        <h1 className="text-4xl font-bold m-8 ml-0">Política de privacidad y aviso legal</h1>
        <h2 className="text-2xl font-bold m-4 ml-0">Política de privacidad</h2>
        <p>A través de este sitio web no se recaban datos de carácter personal de las personas usuarias sin su conocimiento, ni se ceden a terceros.</p>
        <p>Con la finalidad de ofrecerle el mejor servicio y con el objeto de facilitar el uso, se
        analizan el número de páginas visitadas, el número de visitas, así como la actividad
        de las persona visitantes y su frecuencia de utilización.</p>
        <p>La AUVMP no utiliza cookies para recoger información de las personas usuarias, ni
        registra las direcciones IP de acceso. Únicamente se utilizan cookies propias, de
        sesión, con finalidad técnica (aquellas que permiten la navegación a través del sitio
        web y la utilización de las diferentes opciones y servicios que en ella existen).</p>
        <p>El portal del que es titular la AUVMP contiene enlaces a sitios web de terceros,
        cuyas políticas de privacidad son ajenas a la de la AUVMP. Al acceder a tales sitios
        web usted puede decidir si acepta sus políticas de privacidad y de cookies. Con
        carácter general, si navega por internet usted puede aceptar o rechazar las cookies
        de terceros desde las opciones de configuración de su navegador.</p>

        <h3 className="font-semibold m-2 ml-0">Información básica sobre protección de datos</h3>
        <p>A continuación le informamos sobre la política de protección de datos de la AUVMP</p>
        <h3 className="font-semibold m-2 ml-0">Responsable del tratamiento</h3>
        <p>Los datos de carácter personal que se pudieran recabar directamente de la persona
        interesada serán tratados de forma confidencial y quedarán incorporados a la
        correspondiente actividad de tratamiento titularidad de la AUVMP.</p>

        <h3 className="font-semibold m-2 ml-0">Finalidad</h3>
        <p>La finalidad del tratamiento de los datos corresponde a cada una de las actividades
        de tratamiento que realiza la AUVMP y que están accesibles a través de previa
        petición por email.</p>
        <h3 className="font-semibold m-2 ml-0">Legitimación</h3>
        <p>El tratamiento de sus datos se realiza para el cumplimiento de obligaciones legales
        por parte de la AUVMP, para el cumplimiento de misiones realizada en interés
        público o en el ejercicio de poderes públicos conferidos a la AUVMP, así como
        cuando la finalidad del tratamiento requiera su consentimiento, que habrá de ser
        prestado mediante una clara acción afirmativa.</p>
        <p>Puede consultar la base legal para cada una de las actividades de tratamiento que
        lleva a cabo la AUVMP a través de previa petición por email.</p>
        <h3 className="font-semibold m-2 ml-0">Conservación de datos</h3>
        <p>Los datos personales proporcionados se conservarán durante el tiempo necesario
        para cumplir con la finalidad para la que se recaban y para determinar las posibles
        responsabilidades que se pudieran derivar de la finalidad, además de los períodos
        establecidos en la normativa de archivos y documentación.</p>
        <h3 className="font-semibold m-2 ml-0">Comunicación de datos</h3>
        <p>Con carácter general no se comunicarán los datos personales a terceros, salvo
        obligación legal, entre las que pueden estar las comunicaciones al Defensor del
        Pueblo, Jueces y Tribunales, personas interesadas en los procedimientos
        relacionados con las reclamaciones presentadas.</p>
        <p>Puede consultar los destinatarios para cada una de las actividades de tratamiento
        que lleva a cabo la AEPD a través de previa petición por email.</p>
        <h3 className="font-semibold m-2 ml-0">Derechos de las personas interesadas</h3>

        <p>Para solicitar el acceso, la rectificación, supresión o limitación del tratamiento de
        los datos personales o a oponerse al tratamiento, en el caso de se den los
        requisitos establecidos en el Reglamento General de Protección de Datos, así
        como en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
        Personal y garantía de los derechos digitales, puede dirigir un escrito al
        responsable del tratamiento, en este caso, la AUVMP, dirigiendo el mismo a la
        Asociación de Usuarios de Vehículos de Movilidad Personal., C/Vital Aza, 41,
        28017- Madrid.</p>
        Datos de contacto del DPD: <a className="text-orange-400" href="malto:admin@auvmp.org">admin@auvmp.org</a> 
        <h2 className="text-2xl font-bold m-4 ml-0">Aviso legal</h2>

        <p>Este portal, cuyo titular es la Asociación de Usuarios de Vehículos de Movilidad
        Personal (AUVMP), con NIF G-88109293, domicilio en la calle Vital Aza, no41,
        28017 Madrid, y teléfono oficial 604 882 390, está constituido por los sitios web
        asociados a los dominios auvmp.org</p>

        <h3 className="font-semibold m-2 ml-0">Propiedad intelectual e industrial</h3>
        <p>El diseño del portal y sus códigos fuente, así como los logos, marcas y demás
        signos distintivos que aparecen en el mismo pertenecen a la AUVMP y están
        protegidos por los correspondientes derechos de propiedad intelectual e industrial.</p>
        <p>Las <a className="text-orange-400" href="https://www.aepd.es/es/guias-y-herramientas/infografias">infografías</a> y <a className="text-orange-400" href="https://www.aepd.es/es/guias-y-herramientas/guias"> guías</a> de la Asociación se publican con una licencia de uso CC
        BY-NC-SA 4.0 que permite su reutilización para uso no comercial, atribuyendo la
        autoría y manteniendo las mismas condiciones (<a className="text-orange-400" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">enlace al detalle de la licencia</a>).</p>

        <Image src="/by-nc-sa.eu.png" width={403} height={141} alt="Creative Commons BY NC SA EU" />

        <h3 className="font-semibold m-2 ml-0">Responsabilidad de los contenidos</h3>
        <p>La AUVMP no se hace responsable de la legalidad de otros sitios web de terceros
        desde los que pueda accederse al portal. La AUVMP tampoco responde por la
        legalidad de otros sitios web de terceros, que pudieran estar vinculados o enlazados
        desde este portal.</p>
        <p>La AUVMP se reserva el derecho a realizar cambios en el sitio web sin previo aviso,
        al objeto de mantener actualizada su información, añadiendo, modificando,
        corrigiendo o eliminando los contenidos publicados o el diseño del portal.</p>
        <p>La AUVMP no será responsable del uso que terceros hagan de la información
        publicada en el portal, ni tampoco de los daños sufridos o pérdidas económicas que,
        de forma directa o indirecta, produzcan o puedan producir perjuicios económicos,
        materiales o sobre datos, provocados por el uso de dicha información.</p>
        <h3 className="font-semibold m-2 ml-0">Reproducción de contenidos</h3>
        <p>Se prohíbe la reproducción total o parcial de los contenidos publicados en el portal.
        No obstante, los contenidos que sean considerados como datos abiertos en la
        Sede Electrónica, publicados según lo previsto en el Real Decreto 1495/2011, de
        24 de octubre, de desarrollo de la Ley 37/2007, sobre reutilización de la
        información del sector público, para el ámbito del sector público estatal, podrán ser
        objeto de reproducción.</p>
        <h3 className="font-semibold m-2 ml-0">Sede Electrónica</h3>
        <p>De acuerdo con lo establecido por el artículo 12 del Real Decreto 203/2021, de 30
        de marzo, por el que se aprueba el Reglamento de actuación y funcionamiento del
        sector público por medios electrónicos, la AUVMP se responsabiliza de la
        integridad, veracidad y actualización de la información y los servicios a los que
        pueda accederse a través de petición previa via email.</p>

        <h3 className="font-semibold m-2 ml-0">Portal de transparencia</h3>
        <p>A través de la información publicada en el portal de transparencia, la AUVMP
        atiende de forma periódica y actualizada el principio de publicidad activa establecido
        por la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información
        pública y buen gobierno, con los mecanismos adecuados para facilitar la
        accesibilidad, la interoperabilidad, la calidad y la reutilización de la información, así
        como su identificación y localización.</p>
        <h3 className="font-semibold m-2 ml-0">Ley aplicable</h3>
        <p>La ley aplicable en caso de disputa o conflicto de interpretación de los términos que
        conforman este aviso legal, así como cualquier cuestión relacionada con los
        servicios del presente portal, será la ley española.</p>
      </main>
    </div>
  </>)
}