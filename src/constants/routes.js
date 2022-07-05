import React from 'react';
import {StyleSheet, PixelRatio} from 'react-native';
import {Scene, Router, Tabs, Modal, Stack} from 'react-native-router-flux';
import {StackViewStyleInterpolator} from 'react-navigation-stack';

import CenaSplash from '@scenes/CenaSplash';
import CenaLogin from '@scenes/CenaLogin';
import CenaRecuperarSenha from '@scenes/CenaRecuperarSenha';
import CenaHome from '@scenes/CenaHome';
import CenaCadastro from '@scenes/CenaCadastro';
import CenaCadastroEmpresa from '@scenes/CenaCadastroEmpresa';
import CenaEmpresaCompletarDados from '@scenes/CenaEmpresaCompletarDados';
import CenaEmpresaCadastroCategorias from '@scenes/CenaEmpresaCadastroCategorias';
import CenaEmpresaCadastroHorarios from '@scenes/CenaEmpresaCadastroHorarios';
import CenaEmpresaCadastroServicos from '@scenes/CenaEmpresaCadastroServicos';
import CenaPreCadastro from '@scenes/CenaPreCadastro';
import CenaTabsHome from '@scenes/CenaTabsHome';
import CenaTabsHomeEmpresa from '@scenes/CenaTabsHomeEmpresa';
import CenaEmpresaAgenda from '@scenes/CenaEmpresaAgenda';
import CenaListaEmpresas from '@scenes/CenaListaEmpresas';
import CenaEmpresaCalendario from '@scenes/CenaEmpresaCalendario';
import CenaEmpresaClientes from '@scenes/CenaEmpresaClientes';
import CenaPerfil from '../scenes/CenaPerfil';
import CenaEmpresaDados from '../scenes/CenaEmpresaDados';
import CenaEmpresaNovoCliente from '../scenes/CenaEmpresaNovoCliente';
import CenaChooseLocation from '../scenes/CenaChooseLocation';
import CenaEmpresaNovoAgendamento from '../scenes/CenaEmpresaNovoAgendamento';
import CenaNovoAgendamento from '../scenes/CenaNovoAgendamento';
import CenaMeusAgendamentos from '../scenes/CenaMeusAgendamentos';
import CenaAgendamentoDetalhe from '../scenes/CenaAgendamentoDetalhe';
import CenaToProJogoPre from '../scenes/CenaToProJogoPre';
import CenaToProJogo from '../scenes/CenaToProJogo';
import CenaCadastroToProJogo from '../scenes/CenaCadastroToProJogo';
import CenaToProJogoUsuarios from '../scenes/CenaToProJogoUsuarios';
import CenaAgendamentoConviteGeral from '../scenes/CenaAgendamentoConviteGeral';
import CenaConvites from '../scenes/CenaConvites';
import CenaConviteDetalhe from '../scenes/CenaConviteDetalhe';
import CenaTorneios from '../scenes/CenaTorneios';
import CenaMeusTorneios from '../scenes/CenaMeusTorneios';
import CenaTorneioDetalhe from '../scenes/CenaTorneioDetalhe';
import CenaNovoTorneio from '../scenes/CenaNovoTorneio';
import CenaTorneioInscricao from '../scenes/CenaTorneioInscricao';
import CenaTorneioInscritos from '../scenes/CenaTorneioInscritos';
import CenaTorneioJogos from '../scenes/CenaTorneioJogos';
import CenaTorneioGrupos from '../scenes/CenaTorneioGrupos';
import CenaTorneioGruposGerados from '../scenes/CenaTorneioGruposGerados';
import CenaTorneioCategoria from '../scenes/CenaTorneioCategoria';
import CenaTorneioCriarGrupos from '../scenes/CenaTorneioCriarGrupos';
import CenaTorneioCriarGruposPre from '../scenes/CenaTorneioCriarGruposPre';
import CenaTorneioInscricaoMudarGrupo from '../scenes/CenaTorneioInscricaoMudarGrupo';
import CenaTorneioInformarResultado from '../scenes/CenaTorneioInformarResultado';
import CenaTorneioMudarHorario from '../scenes/CenaTorneioMudarHorario';
import CenaNotificacoes from '../scenes/CenaNotificacoes';
import CenaRelatorios from '../scenes/CenaRelatorios';
import CenaFinanceiro from '../scenes/CenaFinanceiro';
import CenaProblemasConta from '../scenes/CenaProblemasConta';
import CenaRenovarAssinatura from '../scenes/CenaRenovarAssinatura';
import ModalEntrandoVisitante from '@components/Modals/ModalEntrandoVisitante';
import MainTabBar from '@components/Tabs/MainTabBar';

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

class Routes extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navigationBarStyle} style={styles.container}>
        <Stack key="root" style={styles.container}>
          <Scene
            key="splash"
            title="Splash"
            component={CenaSplash}
            hideNavBar={true}
          />
          <Scene
            key="home"
            title="Home"
            component={CenaHome}
            hideNavBar={true}
          />
          <Scene
            key="preCadastro"
            title="Pré Cadastro"
            component={CenaPreCadastro}
            hideNavBar={true}
          />
          <Scene
            key="cadastro"
            title="Cadastro"
            component={CenaCadastro}
            hideNavBar={true}
          />
          <Scene
            key="cadastroEmpresa"
            title="Cadastro de Empresa"
            component={CenaCadastroEmpresa}
            hideNavBar={true}
          />
          <Scene
            key="empresaCompletarDados"
            title="Empresa Complementar Dados"
            component={CenaEmpresaCompletarDados}
            hideNavBar={true}
          />
          <Scene
            key="torneioInscricao"
            title="Torneio Inscrição"
            component={CenaTorneioInscricao}
            hideNavBar={true}
          />
          <Scene
            key="torneioInscritos"
            title="Torneio Inscritos"
            component={CenaTorneioInscritos}
            hideNavBar={true}
          />
          <Scene
            key="torneioJogos"
            title="Torneio Jogos"
            component={CenaTorneioJogos}
            hideNavBar={true}
          />
          <Scene
            key="empresaCadastroCategorias"
            title="Empresa Cadastro Categorias"
            component={CenaEmpresaCadastroCategorias}
            hideNavBar={true}
          />
          <Scene
            key="financeiro"
            title="Financeiro"
            component={CenaFinanceiro}
            hideNavBar={true}
          />
          <Scene
            key="problemasConta"
            title="ProblemasConta"
            component={CenaProblemasConta}
            hideNavBar={true}
          />
          <Scene
            key="renovarAssinatura"
            title="Renovar Assinatura"
            component={CenaRenovarAssinatura}
            hideNavBar={true}
          />
          <Scene
            key="empresaCadastroServicos"
            title="Empresa Cadastro Serviços"
            component={CenaEmpresaCadastroServicos}
            hideNavBar={true}
          />
          <Scene
            key="empresaCadastroHorarios"
            title="Empresa Cadastro Horários"
            component={CenaEmpresaCadastroHorarios}
            hideNavBar={true}
          />
          <Scene
            key="login"
            title="Login"
            component={CenaLogin}
            hideNavBar={true}
          />
          <Scene
            key="recuperarSenha"
            title="Recuperar a Senha"
            component={CenaRecuperarSenha}
            hideNavBar={true}
          />
          <Scene
            key="novoCliente"
            title="Novo Cliente"
            component={CenaEmpresaNovoCliente}
            hideNavBar={true}
          />
          <Scene
            key="meusAgendamentos"
            title="Meus Agendamentos"
            component={CenaMeusAgendamentos}
            hideNavBar={true}
          />
          <Scene
            key="meusTorneios"
            title="Meus Torneios"
            component={CenaMeusTorneios}
            hideNavBar={true}
          />
          <Scene
            key="novoTorneio"
            title="Novo Torneio"
            component={CenaNovoTorneio}
            hideNavBar={true}
          />
          <Scene
            key="torneioDetalhe"
            title="Detalhes do Agendamento"
            component={CenaTorneioDetalhe}
            hideNavBar={true}
          />
          <Scene
            key="convites"
            title="Convites"
            component={CenaConvites}
            hideNavBar={true}
          />
          <Scene
            key="torneioCategoria"
            title="Categoria"
            component={CenaTorneioCategoria}
            hideNavBar={true}
          />
          <Scene
            key="torneioCriarGruposPre"
            title="Criar Grupos"
            component={CenaTorneioCriarGruposPre}
            hideNavBar={true}
          />
          <Scene
            key="torneioCriarGrupos"
            title="Criar Grupos"
            component={CenaTorneioCriarGrupos}
            hideNavBar={true}
          />
          <Scene
            key="torneioGruposGerados"
            title="Grupos Gerados"
            component={CenaTorneioGruposGerados}
            hideNavBar={true}
          />
          <Scene
            key="torneioInscricaoMudarGrupo"
            title="Mudar Grupo"
            component={CenaTorneioInscricaoMudarGrupo}
            hideNavBar={true}
          />
          <Scene
            key="torneioGrupos"
            title="Grupos"
            component={CenaTorneioGrupos}
            hideNavBar={true}
          />
          <Scene
            key="torneioInformarResultado"
            title="Informar Resultado"
            component={CenaTorneioInformarResultado}
            hideNavBar={true}
          />
          <Scene
            key="torneioMudarHorario"
            title="Mudar Horário"
            component={CenaTorneioMudarHorario}
            hideNavBar={true}
          />
          <Modal key="modalConviteDetalhe" hideNavBar={true} lazy={true} transitionConfig={transitionConfig}>
            <Scene
              key="root"
              title="Detalhe do Convite"
              component={CenaConviteDetalhe}
              hideNavBar={true}
              lazy={true}
              hideTabBar={true}
            />
          </Modal>
          <Scene
            key="toProJogoPre"
            title="To Pro Jogo"
            component={CenaToProJogoPre}
            hideNavBar={true}
          />
          <Scene
            key="toProJogo"
            title="To Pro Jogo"
            component={CenaToProJogo}
            hideNavBar={true}
          />
          <Scene
            key="cadastroToProJogo"
            title="Cadastro To Pro Jogo"
            component={CenaCadastroToProJogo}
            hideNavBar={true}
          />
          <Scene
            key="notificacoes"
            title="Notificações"
            component={CenaNotificacoes}
            hideNavBar={true}
          />
          <Scene
            key="relatorios"
            title="Relatórios"
            component={CenaRelatorios}
            hideNavBar={true}
          />

          <Modal key="modalEntrandoVisitante" hideNavBar={true} lazy={true}>
            <Scene
              key="root"
              title="Viagem Info"
              component={ModalEntrandoVisitante}
              hideNavBar={true}
              lazy={true}
              hideTabBar={true}
            />
          </Modal>

          <Modal key="modalChooseLocation" hideNavBar={true} lazy={true}>
            <Scene
              key="root"
              title="Choose Location"
              component={CenaChooseLocation}
              hideNavBar={true}
              lazy={true}
              hideTabBar={true}
            />
          </Modal>

          <Modal key="modalAgendamentoDetalhe" hideNavBar={true} lazy={true} transitionConfig={transitionConfig}>
            <Scene
              key="root"
              title="Detalhe do Agendamento"
              component={CenaAgendamentoDetalhe}
              hideNavBar={true}
              lazy={true}
              hideTabBar={true}
            />
          </Modal>

          <Modal key="modalNovoAgendamento" hideNavBar={true} lazy={true} transitionConfig={transitionConfig}>
            <Scene
              key="root"
              title="Novo Agendamento"
              component={CenaEmpresaNovoAgendamento}
              hideNavBar={true}
              lazy={true}
              hideTabBar={true}
            />
          </Modal>

          <Scene
            key="novoAgendamento"
            title="Novo Agendamento"
            component={CenaNovoAgendamento}
            hideNavBar={true}
            lazy={true}
            hideTabBar={true}
          />

          <Scene
            key="listaEmpresas"
            title="ListaEmpresas"
            component={CenaListaEmpresas}
            hideNavBar={true}
            lazy={true}
          />
          <Scene
            key="empresaCalendario"
            title="Empresa Calendário"
            component={CenaEmpresaCalendario}
            hideNavBar={true}
            lazy={true}
          />
          <Scene
            key="empresaAgenda"
            title="Empresa Agenda"
            component={CenaEmpresaAgenda}
            hideNavBar={true}
            lazy={true}
          />
          <Scene
            key="empresaDados"
            title="Dados da Empresa"
            component={CenaEmpresaDados}
            hideNavBar={true}
            lazy={true}
          />
          <Scene
            key="agendamentoToProJogoUsuarios"
            title="Usuários do To Pro Jogo"
            component={CenaToProJogoUsuarios}
            hideNavBar={true}
          />
          <Scene
            key="agendamentoConviteGeral"
            title="Conivte Geral"
            component={CenaAgendamentoConviteGeral}
            hideNavBar={true}
          />

          <Tabs
            key="cenaTabs"
            hideNavBar={true}
            //tabBarStyle={styles.tabBar}
            backToInitial
            swipeEnabled
            showLabel={false}
            tabBarComponent={MainTabBar}
            lazy={true}>
            <Stack>
              <Scene
                key="tabsHome"
                title="Inicial"
                component={CenaTabsHome}
                hideNavBar={true}
                lazy={true}
                iconName="home"
              />
            </Stack>
            <Stack>
              <Scene
                key="perfil"
                title="Perfil"
                component={CenaPerfil}
                hideNavBar={true}
                lazy={true}
                iconName="user"
              />
            </Stack>
          </Tabs>

          <Tabs
            key="cenaTabs"
            hideNavBar={true}
            //tabBarStyle={styles.tabBar}
            backToInitial
            swipeEnabled
            showLabel={false}
            tabBarComponent={MainTabBar}
            lazy={true}>
            <Stack>
              <Scene
                key="tabsHome"
                title="Inicial"
                component={CenaTabsHome}
                hideNavBar={true}
                lazy={true}
                iconName="home"
              />
            </Stack>
            <Stack>
              <Scene
                key="meusAgendamentoss"
                title="Agendamentos"
                component={CenaMeusAgendamentos}
                hideNavBar={true}
                lazy={true}
                iconName="calendar"
              />
            </Stack>
            <Stack>
              <Scene
                key="torneios"
                title="Torneios"
                component={CenaTorneios}
                hideNavBar={true}
                lazy={true}
                iconName="trophy"
                iconType="SimpleLineIcons"
              />
            </Stack>
            <Stack>
              <Scene
                key="perfil"
                title="Perfil"
                component={CenaPerfil}
                hideNavBar={true}
                lazy={true}
                iconName="user"
              />
            </Stack>
          </Tabs>
          
          <Scene
            key="empresaClientes"
            title="Clientes"
            component={CenaEmpresaClientes}
            hideNavBar={true}
            lazy={true}
          />

          <Tabs
            key="cenaTabsEmpresa"
            hideNavBar={true}
            //tabBarStyle={styles.tabBar}
            backToInitial
            swipeEnabled
            showLabel={false}
            tabBarComponent={MainTabBar}
            lazy={true}>
            <Stack>
              <Scene
                key="tabsHomeEmpresa"
                title="Inicial"
                component={CenaTabsHomeEmpresa}
                hideNavBar={true}
                lazy={true}
                iconName="home"
              />
            </Stack>
            <Stack>
              <Scene
                key="perfil"
                title="Perfil"
                component={CenaPerfil}
                hideNavBar={true}
                lazy={true}
                iconName="user"
              />
            </Stack>
          </Tabs>
          
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
    //opacity: 0.98,
  },
  navigationBarStyle: {
    backgroundColor: '#FFF',
  },
  navigationBarTitleStyle: {
    color: 'white',
  },
});

export default Routes;
