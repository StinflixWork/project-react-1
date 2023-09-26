import {
	StaffBody,
	StaffCard,
	StaffCardBody,
	StaffCardImg,
	StaffCards,
	WrapperStaff
} from './StaffSection.styled.js'
import { Heading2 } from 'styles/Title.styled.js'
import { Text } from 'styles/Text.styled.js'
import { Container } from 'styles/Container.styled.js'
import Worker1 from 'assets/images/worker-1.png'
import Worker2 from 'assets/images/worker-2.png'
import Worker3 from 'assets/images/worker-3.png'
import WorkerVectors from 'assets/icons/staff-worker-vectors.svg'

const StaffSection = () => {
	return (
		<WrapperStaff>
			<Container>
				<StaffBody data-aos="fade-up">
					<Heading2>Our Staff</Heading2>
					<Text>
						At <span>TheBurger</span>, we take pride in delivering a burger
						experience that goes beyond the ordinary. Our dedicated{' '}
						<span>team of professionals</span> is at the heart of this mission,
						working tirelessly to ensure every visit to our restaurant is a
						memorable one.
					</Text>
				</StaffBody>
				<StaffCards>
					<StaffCard data-aos="fade-up">
						<img src={WorkerVectors} alt="" />
						<StaffCardImg>
							<img src={Worker1} alt="Worker Emily Thompson" />
						</StaffCardImg>
						<StaffCardBody>
							<h6>Emily Thompson</h6>
							<p>General Manager</p>
						</StaffCardBody>
					</StaffCard>
					<StaffCard data-aos="fade-up">
						<img src={WorkerVectors} alt="" />
						<StaffCardImg>
							<img src={Worker2} alt="Worker Michael Johnson" />
						</StaffCardImg>
						<StaffCardBody>
							<h6>Michael Johnson</h6>
							<p>Master Chef</p>
						</StaffCardBody>
					</StaffCard>
					<StaffCard data-aos="fade-up">
						<img src={WorkerVectors} alt="" />
						<StaffCardImg>
							<img src={Worker3} alt="Worker Sarah Davis" />
						</StaffCardImg>
						<StaffCardBody>
							<h6>Sarah Davis</h6>
							<p>Director</p>
						</StaffCardBody>
					</StaffCard>
				</StaffCards>
			</Container>
		</WrapperStaff>
	)
}

export default StaffSection
